import * as React from 'react';

type Props = {
    path: string;
    alt?: string;
    className?: string;
};
const SvgImage = ({alt, className, path}: Props) => {
    return (
        <div>
            <img className={className} src={path} alt={alt}/>
        </div>
    );
};

export default SvgImage
