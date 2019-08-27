import React from 'react';

function ProjectRow(props){
    return(
        
        props.projects.map(project =>
            <tr key={project._id}>
                <td> {project.ProjectName} </td>
                <td> Active {project.days} Days</td> 
            </tr>
        )
    )
}

export default ProjectRow;