import React from 'react';

type Props = {
    show: boolean
    content: React.ReactNode;
    onClick: () => void;
}

const Modal = ({show, content, onClick}: Props) => {
    const component = <div className="overlay">
        <div className="modal" id="modal">
            <div className="content">
                {content}
            </div>
            <div className="actions">
                <button className="btn" onClick={onClick}>
                    Close
                </button>
            </div>
        </div>
    </div>;

    return (
        <>
            {show ? component : null}
        </>
    );
}

export default Modal;
