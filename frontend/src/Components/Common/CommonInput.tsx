import { useState } from "react";

const CommonInput = ({ name }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (value) => {
        setInputValue(value)
    }

    return (
        <div>
            <input className="block w-full py-2 px-3 rounded-md border-2 ring-8 ring-transparent outline-none focus:ring-blue-300 border-black"
                type="text"
                name={name}
                value={inputValue}
                onChange={e => { handleInputValue(e.target.value) }}
            />
        </div>
    );
}

export default CommonInput;