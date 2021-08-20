import React from "react";

interface TriangleButtonProperties {
    onClick: () => void;
    invert?: boolean;
}

const TriangleButton: React.FC<TriangleButtonProperties> =
    ({
         onClick,
         invert,
     }) => {
        return (
            <div
                onClick={onClick}
                className={'triangle' + (invert ? ' flip-horizontally' : '')}
            >
            </div>
        )
    }

TriangleButton.defaultProps = {
    invert: false
}

export default TriangleButton
