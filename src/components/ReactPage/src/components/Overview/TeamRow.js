import React from 'react';

function TeamRow(props){
    return(
        
        props.teams.map(team =>
            <tr>
                <td> {team.TeamName} </td>
                <td> {team.NumEmps} Employees</td> 
            </tr>
        )
    )
}

export default TeamRow;