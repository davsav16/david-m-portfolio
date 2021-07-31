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
} = props;

    return (
        <header>
            <h2>
                <a href="/">
                    David McDougal's Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => { setAboutSelected(true); setContactSelected(false); setProjectSelected(false); setResumeSelected(false); }}>
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#projects" onClick={() => { setAboutSelected(false); setContactSelected(false); setProjectSelected(true); setResumeSelected(false); }}>
                            Projects
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact" onClick={() => { setAboutSelected(false); setContactSelected(true); setProjectSelected(false); setResumeSelected(false); }}>
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume" onClick={() => { setAboutSelected(false); setContactSelected(false); setProjectSelected(false); setResumeSelected(true); }}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;