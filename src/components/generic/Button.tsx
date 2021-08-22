import React from "react";

interface ButtonProperties {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProperties> =
    ({
         text,
         onClick,
         disabled
     }) => {
        return (
            <button
                onClick={onClick}
                className={disabled ? 'btn btn-disabled' : 'btn'}
                disabled={disabled}
            >
                {text}
            </button>
        )
    }

Button.defaultProps = {
    disabled: false
}

export default Button
