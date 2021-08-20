import React from "react";

interface ButtonProperties {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProperties> =
    ({
         text,
         onClick
     }) => {
        return (
            <button
                onClick={onClick}
                className='btn'
            >
                {text}
            </button>
        )
    }

export default Button
