import React from 'react';
import ReactModal from 'react-bootstrap/Modal';

function Modal(props) {
    const {projectName, link, github, alt, tools, onClose, description, show} = props

    return (
        <ReactModal show={show} centered>
            <div className="modalBackdrop">
                <div className="modalContainer modeStyle">
                    <h3>{projectName}</h3>
                    <a className="modeStyle" href={link} target="_blank" rel="noreferrer">Deployed Site</a>
                    ||
                    <a className="modeStyle" href={github} target="_blank" rel="noreferrer">GitHub Repository</a>
                    <img src={require(`../../assets/project-imgs/${projectName}.png`).default} alt={alt}/>
                    <p className="modeStyle">{description}</p>
                    
                    <p className="modeStyle">
                        <h4>Tools Used:</h4>
                        {tools}
                    </p>
                    <div className="modeBtnStyle">
                    <button type="button"onClick={onClose}>Close</button>
                    </div>
                   
                </div>
            </div>
        </ReactModal>
      

    );
}

export default Modal;