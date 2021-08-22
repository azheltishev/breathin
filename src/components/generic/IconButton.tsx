import * as React from 'react';
import {Icon} from "@iconify/react";

type Props = {
    onClick: () => void;
    icon: string;
    className?: string;
};
export const IconButton = ({onClick, icon, className}: Props) => {
    return (
        <div>
            <Icon icon={`mdi:${icon}`} className={`icon-btn ${className}`} onClick={onClick}/>
        </div>
    );
};

IconButton.defaultProps = {
    className: ''
}
