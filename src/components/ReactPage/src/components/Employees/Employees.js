import React, { Component } from 'react';
import EmployeesContainer from './EmployeesContainer';
import '../Overview/Overview.css';

class Employees extends Component {
  render() {
    return (
        <div id="main">
            <div id="content"> 
                <EmployeesContainer/>
            </div>
        </div>    
    );
  }
}

export default Employees;


