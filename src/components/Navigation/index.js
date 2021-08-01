import React from 'react';

function Navigation(props) {
    const {
        aboutSelected,
        setAboutSelected,
        projectSelected,
        setProjectSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
    } = props

    return (
        <header className="flex-row">
            <h2 id="headerTitle">
                <a href="/">
                    David McDougal's Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row1 space-between nav-padding navMobile">
                        <li className={`${aboutSelected && 'navActive'}`}>
                            <a href="#about"   
                            onClick={() => { setAboutSelected(true); setContactSelected(false); setResumeSelected(false); setProjectSelected(false); }}>
                            <h3>About Me</h3></a>
                        </li>
                        <li className={`${projectSelected && 'navActive'}`}>
                            <a href="#work"
                            onClick={() => { setAboutSelected(false); setContactSelected(false); setProjectSelected(true); setResumeSelected(false); }}>
                            <h3>My Projects</h3></a>                            
                        </li>
                        <li className={`${contactSelected && 'navActive'}`}>
                            <a href="#contact-me" 
                            onClick={() => { setAboutSelected(false); setContactSelected(true); setProjectSelected(false); setResumeSelected(false); }}>
                            <h3>Contact</h3></a>
                        </li>
                        <li className={`${resumeSelected && 'navActive'}`}>
                            <a href="#resume" 
                            onClick={() => { setAboutSelected(false); setContactSelected(false); setProjectSelected(false); setResumeSelected(true); }}>
                            <h3>Resume</h3></a>
                        </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;