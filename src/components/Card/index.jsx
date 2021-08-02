import React, { useState } from 'react';
import Modal from '../Modal';

function Card(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="flex-card">
            {handleShow && <Modal 
                show={show}
                onClose={handleClose}
                projectName={props.projectName}
                link={props.link}
                github={props.github}
                tools={props.tools}
                description={props.description}
            />}
            <div className="card">
                <img src={require(`../../assets/project-imgs/${props.projectName}.png`).default} alt={props.alt} className="projectImg" />
                <div className="cardInfo">
                    <h2>{props.projectName}</h2>
                    <h4>Created Using:</h4>
                    <p>{props.tools}</p>
                   
                    <button onClick={handleShow} id="modal-button">Click for Info</button>
                </div>
            </div>
        </div>
    )
}

export default Card;