import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const CheckRow = ({ handleCheckbox, isCheck, catetory, total, cateId }) => {
    return (
        <div className="flex flex-row justify-between p-3 hover:bg-blue-200 hover:cursor-pointer">
            <div className="flex flex-row items-center">
                <input
                    type="checkbox"
                    className="w-5 h-5"
                    onChange={e => handleCheckbox(e, cateId)}
                    checked={isCheck}
                />
                <span className="px-3">{catetory}</span>
            </div>
            <div>{total}</div>
        </div>
    );
};

const ClassifyList = ({ searchInput }) => {
    const [isFocus, setIsFocus] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const outSideitem = { cateId: 1, name: "Information" };
    const [topItem, setTopItem] = useState(0);
    const [followItems, setFollowItems] = useState({});

    const outRef = useRef(null);

    useEffect(() => {
        if (!topItem && Object.values(followItems).every(value => value === false)) {
            setInputValue("");
            setIsCheck(false);
        }
    }, [topItem, followItems]);

    const handleTopItem = (event, cateId) => {
        const checked = event.target.checked;
        if (checked) {
            setTopItem(cateId);
        } else {
            setTopItem(0);
        }
        setFollowItems({});
    };

    const handleFollowItems = (event, cateId) => {
        const checked = event.target.checked;
        const newFollowItems = { ...followItems, [cateId]: checked };
        setFollowItems(newFollowItems);
        if (checked) {
            setTopItem(0);
        } else {
            if (Object.values(newFollowItems).every(value => value === false)) {
                setTopItem(outSideitem["cateId"]);
            }
        }

    }

    const handleOutCheck = (event, cateId) => {
        const checked = event.target.checked;
        setIsCheck(checked);
        setInputValue(checked ? outSideitem["name"] : '');
        if (checked) {
            setFollowItems({});
            setTopItem(cateId);
        } else {
            setFollowItems({});
            setTopItem(0);
        }
    }

    const handleFoucs = () => {
        setIsFocus(!isFocus);
        if(!isFocus) {
            handleScrollTop();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    const handleClear = () => {
        setIsFocus(false);
        setIsCheck(false);
        setInputValue("");
        setTopItem(0);
        setFollowItems({});
        document.body.style.overflow = 'auto';
    };

    const handleBlur = () => {
        setIsFocus(false);
        document.body.style.overflow = 'auto';
    }

    const handleScrollTop = () => {
        outRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <div
            className={classNames([
                'w-full relative',
                isFocus ? 'z-50' : '',
            ])}
            ref={outRef}
        >
            {isFocus && <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleBlur}></div>}
            <div className="relative hover:cursor-pointer">
                <input
                    type="text"
                    readOnly
                    placeholder='Any Classification'
                    className={classNames([
                        searchInput,
                        "hover:cursor-pointer"
                    ])}
                    value={inputValue}
                    onClick={handleFoucs}
                />
                <div
                    className={classNames([
                        "absolute flex justify-center items-center top-1/2 -translate-y-1/2 -translate-x-3 rounded-full h-8 w-8",
                        inputValue ? "right-8" : "right-0",
                    ])}>
                    <i className={classNames([
                        "fa-solid fa-chevron-down duration-300 rotate-180",
                        inputValue ? "rotate-180" : "",
                        isFocus ? "rotate-0" : "",
                    ])}></i>
                </div>
                {inputValue && <div
                    className={classNames([
                        "absolute flex justify-center items-center right-0 top-1/2 -translate-y-1/2 -translate-x-3 hover:cursor-pointer hover:bg-gray-200 rounded-full h-8 w-8",
                    ])}
                    onClick={handleClear}
                ><i className="fa-solid fa-xmark"></i></div>}
            </div>
            {isFocus && <div className={classNames([
                'rounded-md bg-white flex flex-col absolute top-full translate-y-3 left-0 overflow-y-scroll h-64 w-full md:w-96 shadow-md',
            ])}>
                <div className={classNames([
                    "flex flex-col",
                ])}>
                    <div>
                        <CheckRow
                            handleCheckbox={handleOutCheck}
                            isCheck={topItem || !Object.values(followItems).every(value => value === false)}
                            catetory={"Information"}
                            cateId={1}
                            total={6095}
                        />
                        {isCheck && <div className="pl-6">
                            <CheckRow handleCheckbox={handleTopItem} isCheck={Boolean(topItem)} catetory={"All information"} cateId={1} total={6095} />
                            <div>
                                <CheckRow handleCheckbox={handleFollowItems} isCheck={Boolean(followItems[2])} catetory={"Computer operators"} cateId={2} total={418} />
                                <CheckRow handleCheckbox={handleFollowItems} isCheck={Boolean(followItems[3])} catetory={"Developters"} cateId={3} total={203} />
                            </div>
                        </div>}
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ClassifyList;