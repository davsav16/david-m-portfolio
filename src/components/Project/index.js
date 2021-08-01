import React, { useState } from 'react';
import Card from '../Card';
import projects from '../../assets/projects.json';

function Project() {
    const [ projectList, setProjectList ] = useState(projects)
    
    return (
        <section section id='project'>
            <h2>Projects</h2>
            <div>
                <div className="card-flex">
                    {projectList.map((props, idx) => {
                        return(<Card
                            projectName={props.projectName}
                            link={props.link}
                            github={props.github}
                            tools={props.tools}
                            alt={props.alt}
                            description={props.description}
                            key={idx}    
                        />)
                    })}
                </div>
            </div>
        </section>
    )
}

export default Project;