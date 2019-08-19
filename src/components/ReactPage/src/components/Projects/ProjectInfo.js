import React from 'react';

function ProjectInfo(props){
    return(
        
        props.projects.map(project =>
            <tr>
                <td> {project.ProjectName} </td>
                <td> {project.ProjectDescription} </td> 
                <td> {project.ProjectStartDate}</td> 
                {project.ProjectEndDate ? <td> {project.ProjectEndDate}</td> : <td>n/a</td>}
            </tr>
        )
    )
}

export default ProjectInfo;