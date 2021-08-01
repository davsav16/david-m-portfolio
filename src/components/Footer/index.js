import React from 'react';
import Facebook from '../../assets/icons/facebook.png';
import GitHub from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';

function Footer() {
    return (
        
        <footer>
            <div className="icons">
                <a href="https://github.com/davsav16" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="cover"/>
                </a>
                <a href="https://www.linkedin.com/in/mcdougaldavid/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="cover"/>
                </a>
                <a href="https://www.facebook.com/david.mcdougal.14/" target="_blank" rel="noreferrer">
                    <img src={Facebook} alt="cover"/>
                </a>
            </div>
            <div className="text">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
    )
    
}

export default Footer;