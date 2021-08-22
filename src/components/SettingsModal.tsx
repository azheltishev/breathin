import React, {useState} from 'react';
import Modal from "./generic/Modal";
import Settings from "./Settings";
import {IconButton} from "./generic/IconButton";

const SettingsModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <IconButton onClick={() => setShow(true)} icon="cog" className="top-right-corner"/>
            <Modal show={show} content={<Settings/>} onClick={() => setShow(false)}/>
        </>
    );
}

export default SettingsModal;
