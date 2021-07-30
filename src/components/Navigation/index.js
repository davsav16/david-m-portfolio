import React from 'react';

function Navigation() {

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
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Projects</span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>Resume</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;