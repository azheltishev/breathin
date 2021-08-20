import React from "react";

interface LabelProperties {
    text: string;
}

const Label: React.FC<LabelProperties> =
    ({
         text,
     }) => {
        return (
            <div
                className='label'
            >
                {text}
            </div>
        )
    }

export default Label
