import React from 'react';
import Label from "./Label";
import Button from "./Button";

const Settings = () => {
    return (
        <>
            <div className="settings-container">
                <div className="settings-item">
                    <Label text={"Dark Mode"}/>
                </div>
                <div className="settings-item">
                    <Button text={"Soon"} onClick={() => {
                    }} disabled={true}/>
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
