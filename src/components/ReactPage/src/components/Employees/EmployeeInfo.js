import React from 'react';

function EmployeeInfo(props){
    return(
        
        props.employees.map(employee =>
            <tr>
                <td> {employee.FirstName} {employee.LastName} - {employee.Position.PositionName}</td>
                <td> {employee.AddressStreet} {employee.AddressCity} {employee.AddressState} {employee.AddressZip}</td> 
                <td> {employee.PhoneNum} ext. {employee.Extension}</td>
                <td> {employee.HireDate} </td>
                <td> ${employee.SalaryBonus} </td>
            </tr>
        )
    )
}

export default EmployeeInfo;