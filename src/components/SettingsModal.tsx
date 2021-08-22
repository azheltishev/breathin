import React, {useState} from 'react';
import Modal from "./Modal";
import Settings from "./Settings";

const SettingsModal = () => {
    const [show, setShow] = useState(false);

    return (
        <Modal show={show} content={<Settings/>} onClick={() => setShow(false)}/>
    );
}

export default SettingsModal;
