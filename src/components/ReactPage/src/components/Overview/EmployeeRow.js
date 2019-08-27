import React from 'react';

function EmployeeRow(props){
    return(
        
        props.employees.map(employee =>
            <tr key={employee._id}>
                <td> {employee.FirstName} {employee.LastName} </td>
                <td> {employee.Position.PositionName} </td> 
            </tr>
        )
    )
}

export default EmployeeRow;