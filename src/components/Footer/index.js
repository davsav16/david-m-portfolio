import React from 'react';
import Facebook from '../../assets/icons/facebook.png';
import GitHub from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';

function Footer() {
    return (
        
        <footer>
            <div className="icons">
                <a href="https://github.com/davsav16" target="_blank" rel="noreferrer">
                    <img className="appSpin" src={GitHub} alt="GitHub Logo" />
                </a>
                <a href="https://www.linkedin.com/in/mcdougaldavid/" target="_blank" rel="noreferrer">
                    <img className="appSpin" src={linkedin} alt="LinkedIn Logo"/>
                </a>
                <a href="https://www.facebook.com/david.mcdougal.14/" target="_blank" rel="noreferrer">
                    <img className="appSpin" src={Facebook} alt="FaceBook Logo"/>
                </a>
            </div>
            <div className="text">Icons made by <a href="https://www.freepik.com" title="Freepik"target="_blank" rel="noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"target="_blank" rel="noreferrer">www.flaticon.com</a></div>
        </footer>
    )
    
}

export default Footer;