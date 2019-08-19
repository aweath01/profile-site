import React from 'react';

function TeamInfo(props){
    return(
        
        props.teams.map(team =>
            <tr>
                <td> {team.TeamName} </td>
                <td> 
                    <ul>
                            <li> {team.Projects[0].ProjectName} </li>
                            <li> {team.Projects[1].ProjectName} </li>
                    </ul>
                </td> 
                <td> {team.NumEmps}</td> 
                <td> {team.TeamLead.FirstName} {team.TeamLead.LastName} </td>
            </tr>
        )
    )
}

export default TeamInfo;