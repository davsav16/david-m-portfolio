import React from 'react';
import ReactModal from 'react-bootstrap/Modal';
import button from 'react-bootstrap/Button';

function Modal(props) {
    const {projectName, link, github, alt, tools, onClose, show} = props

    return (
        <ReactModal show={show} centered>
            <div className="modalBackdrop">
                <div className="modalContainer">
                    <h3>{projectName}</h3>
                    <p>
                        {link}
                    </p>
                    <p>
                        {github}
                    </p>
                    <p>
                        {tools}
                    </p>
                    <button type="button"onClick={onClose}>Close</button>
                </div>
            </div>
        </ReactModal>
      

    );
}

export default Modal;