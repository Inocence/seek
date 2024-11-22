import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import ClearToast from "../../common/ClearToast";

const WhereList = ({ searchInput }) => {
    const [isMouseOn, setIsMouseOn] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const outRef = useRef(null);

    const handleFocus = () => {
        setIsFocus(true);
        handleScrollTop();
        document.body.style.overflow = 'hidden';
    }

    const handleBlur = () => {
        handleClear();
    };

    const handleClear = () => {
        setIsFocus(false);
        setInputValue("");
        setIsMouseOn(false);
        document.body.style.overflow = 'auto';
    };

    const handleScrollTop = () => {
        outRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    const handleInput = (value) => {
        setInputValue(value);
    }


    const handleMouseEnter = () => {
        setIsMouseOn(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOn(false);
    };

    return (
        <div
            className={classNames([
                'w-full relative',
                isFocus ? 'z-50' : '',
            ])}
            ref={outRef}
        >
            {isFocus && <div className="fixed inset-0 bg-black bg-opacity-50"></div>}
            <div className='text-white font-medium block mb-2 relative'>Where</div>
            <div className="relative">
                <input
                    type="text"
                    placeholder='Enter suburb, city, or region'
                    className={searchInput}
                    onChange={e => handleInput(e.target.value)}
                    value={inputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {inputValue && <div
                    className={classNames([
                        "absolute flex justify-center items-center right-0 top-1/2 -translate-y-1/2 -translate-x-3 hover:cursor-pointer hover:bg-gray-200 rounded-full h-8 w-8",
                    ])}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClear}
                ><i className="fa-solid fa-xmark"></i></div>}
                {isMouseOn && <ClearToast />}
            </div>
            {isFocus && <div className={classNames([
                'w-full rounded-md bg-white flex flex-col absolute top-full translate-y-3 left-0 overflow-y-scroll h-96 shadow-md',
            ])}>
                <div className={classNames([
                    "flex flex-col",
                ])}>
                    <span className="p-3 text-lg font-bold">Remote</span>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">Work from home</a>
                    <span className="p-3 text-lg font-bold">Recent</span>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">All Austrialia</a>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">All Sydney NSW</a>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">Sydney NSW 2000</a>
                    <span className="p-3 text-lg font-bold">Related areas</span>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">Melbourne VIC 3000</a>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">All Melbourne VIC</a>
                </div>
            </div>}
        </div>
    );
};

export default WhereList;