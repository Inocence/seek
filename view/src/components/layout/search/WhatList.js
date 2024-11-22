import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import ClearToast from "../../common/ClearToast";

const WhatList = ({ searchInput}) => {
    const [isMouseOn, setIsMouseOn] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isFirst, setIsFirst] = useState(false);
    const outRef = useRef(null);

    useEffect(() => {
        if(!isFirst && inputValue) {
            setIsFirst(true);
            handleScrollTop();
            document.body.style.overflow = 'hidden';
        }
    }, [inputValue]);
    
    const handleClear = () => {
        setIsFirst(false);
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
                isFirst ? 'z-50' : '',
            ])}
            ref={outRef}
            >
            {isFirst && <div className="fixed inset-0 bg-black bg-opacity-50"></div>}
            <div className='text-white font-medium block mb-2 relative'>What</div>
            <div className="relative">
                <input
                    type="text"
                    placeholder='Enter Keywords'
                    className={searchInput}
                    onChange={e => handleInput(e.target.value)}
                    value={inputValue}
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
            {inputValue && <div className={classNames([
                'w-full rounded-md bg-white flex flex-col absolute top-full translate-y-3 left-0 overflow-y-scroll h-48 shadow-md',
            ])}>
                <div className={classNames([
                    "flex flex-col",
                ])}>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">php</a>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">react</a>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">java</a>
                    <a href="" className="p-3 text-lg hover:bg-blue-100">python</a>
                </div>
            </div>}
        </div>
    );
};

export default WhatList;