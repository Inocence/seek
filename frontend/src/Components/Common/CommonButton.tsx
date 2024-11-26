import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import React from "react";

interface Props {
    children: string;
    onClick?: () => void;
    variant: 'pinkBackground' | 'blackBorder'
    size: 'small' | 'large';
    icon: 'google' | 'facebook' | 'apple',
    className: string
}

const CommonButton: React.FC<Props> = ({ 
    children,
    onClick,
    variant,
    size = 'small',
    icon = null,
    className = ''
 }) => {
    const baseStyles = 'flex items-center justify-between text-lg just w-full text-center py-2 px-8 rounded-md';
    const variants = {
        pinkBackground: 'text-white bg-pink-600 hover:bg-pink-500',
        blackBorder: 'text-black border-2 border-black hover:bg-blue-100'
    };
    const icons = {
        google: <FontAwesomeIcon icon={faGoogle} />,
        facebook: <FontAwesomeIcon icon={faFacebook} />,
        apple: <FontAwesomeIcon icon={faApple} />
    };
    const sizes = {
        small: 'md:auto',
        large: ''
    };

    return ( 
        <div className="">
            <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            >{icon && <span className="inline-flex">{icons[icon]}</span>} <span className="flex-1">{ children }</span></button>
        </div>
     );
}
 
export default CommonButton;