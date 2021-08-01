import React from 'react';
import ReactModal from 'react-bootstrap/Modal';

function Modal(props) {
    const {projectName, link, github, alt, tools, onClose, description, show} = props

    return (
        <ReactModal show={show} centered>
            <div className="modalBackdrop">
                <div className="modalContainer">
                    <h3>{projectName}</h3>
                    <a href={link} target="_blank">Deployed Site</a>
                    ||
                    <a href={github} target="_blank">GitHub Repository</a>
                    <img src={require(`../../assets/project-imgs/${projectName}.png`).default} alt={alt}/>
                    <p>{description}</p>
                    
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