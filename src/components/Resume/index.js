import React from 'react';
import davidResume from '../../assets/document/David_McDougal_Resume_2.pdf'

function Resume() {
    return (
        <section>
            <a href={davidResume} download="resume">Download</a>
            
        </section>
    )
}

export default Resume;