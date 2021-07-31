import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/project-imgs/budgettracker.png';


function Project(props) {
    const currentPage = {
        projectName: "projectOne",
        link: "thisproject.com",
        github: "github.com",
        tools: "javaScript"

    }

    return (
        <section>
            <div className="flex-row">
                <img 
                src={photo} 
                alt="Budget Example"
                className="img-thumbnail mx-1"
                />
            </div>
            <h1>{capitalizeFirstLetter(currentPage.projectName)}</h1>
            <h2>{currentPage.link}</h2>
            <h2>{currentPage.github}</h2>
            <h2>{capitalizeFirstLetter(currentPage.tools)}</h2>
        </section>
    )
}

export default Project;