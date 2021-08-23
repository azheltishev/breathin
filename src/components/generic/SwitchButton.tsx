import * as React from 'react';

type Props = {
    onChange: () => void;
    defaultChecked?: boolean;
};
export const SwitchButton = ({onChange, defaultChecked}: Props) => {
    return (
        <label className="switch">
            <input type="checkbox" onChange={onChange} defaultChecked={defaultChecked}/>
            <span className="slider round"/>
        </label>
    );
};

SwitchButton.defaultProps = {
    defaultChecked: false
}
