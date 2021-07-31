import React, { useState } from 'react';
import projects from '../../assets/projects.json';

function ProjectList(projectName) {
  
    return (
        <div>
            <div className="flex-row">
                {projects.map((img) => (
                    <img
                        src={require(`../../assets/project-imgs/${projectName}.png`).default}
                        alt={img.projectName}
                        className="img-thumbnail mx-1"
                        key={img.projectName}
                    />

                ))}

            </div>
        </div>
    )
}

export default ProjectList;