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
                <img src={require(`../../assets/project-imgs/${props.projectName}.png`).default} alt={props.alt} />
                <div>
                    <h3>{props.projectName}</h3>
                   
                    <button onClick={handleShow} id="modal-button">Click for Info</button>
                </div>
            </div>
        </div>
    )
}

export default Card;