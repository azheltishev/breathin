import React from 'react';
import Label from "./generic/Label";
import {SwitchButton} from "./generic/SwitchButton";
import {isDarkModeEnabled, toggleTheme} from "../public/themes";

const Settings = () => {
    return (
        <>
            <div className="settings-container">
                <div className="settings-item">
                    <Label text={"Dark Mode"}/>
                </div>
                <div className="settings-item">
                    <SwitchButton defaultChecked={isDarkModeEnabled()} onChange={toggleTheme}/>
                </div>
            </div>
            <div className="settings-container">
                <div className="settings-item">
                    <Label text={"Author"}/>
                </div>
                <div className="settings-item">
                    <Label text={"@azheltishev"}/>
                </div>
            </div>
        </>
    );
};

export default Settings
