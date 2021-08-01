import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
import profilePic from "../../assets/aboutImg.png";

function About() {
    return (
        <section>
            <img src={coverImage} className="waterPic" style={{ width: "100%"}} alt="Image from behind a waterfall." />
            <div className="aboutSec">
                <h1 id="about">About Me</h1>
                <div className="aboutSec flex-row1 container">
                    <p id="aboutText"className="col">
                    I am a Full Stack Developer with experience in User Experience, UX Design, Customer Journey Mapping, and focusing on the customer to find their needs. I attended the BYU Marriott School of Business where I received my BS in Experience and Design Management. I recently received a certificate in Full Stack Web Development from the University of Utah. I believe that with my unique experience and skills, I can provide unique insight into customers needs and provide them with excellent solutions to resolve their needs.
                    </p>
                    <div className="proPicCon">
                    <img src={profilePic} id="profilePic" alt="Business Pic of David McDougal" className="col"/>
                    </div>
                 
                </div>
            </div>
        </section>
    );
}

export default About;