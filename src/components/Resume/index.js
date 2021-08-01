import React from 'react';
import davidResume from '../../assets/document/David_McDougal_Resume_2.pdf'

function Resume() {
    return (
        <section className="resSect">
            <div className=" resumeCont">
                <div className="resumeCard">
                    <a href={davidResume} download="resume">
                        <img src={require('../../assets/document/ResumeShot.PNG').default} alt="Snapshot of David McDougal's Resume." id="resPic" />
                    </a>
                    <a href={davidResume} download="resume">Click Image To Download</a>
                </div>
            </div>
        </section>
    )
}

export default Resume;