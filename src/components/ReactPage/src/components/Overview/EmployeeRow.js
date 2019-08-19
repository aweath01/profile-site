import React from 'react';

function EmployeeRow(props){
    return(
        
        props.employees.map(employee =>
            <tr>
                <td> {employee.FirstName} {employee.LastName} </td>
                <td> {employee.Position.PositionName} </td> 
            </tr>
        )
    )
}

export default EmployeeRow;