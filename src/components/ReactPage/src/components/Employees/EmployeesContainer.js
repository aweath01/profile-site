import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import EmployeeInfo from './EmployeeInfo';
import { getEmployeeData } from '../../data';
import SideBar from '../SideBar';
import './EmployeesContainer.css';

class EmployeesContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            errored: false,
            employees: []
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        getEmployeeData()
          .then(employees => this.setState({ loading: false, employees }))
          .catch(err => {
            console.error('Unable to load employee data', err.message);
            this.setState({ errored: true });
          });
    }
    
    render() {
        // Are we in an error state? If so show an error message.
        if(this.state.errored) {
          return (
            <div>
              <p>Error: unable to load employee data</p>
            </div>
          );
        }
    
        // If we aren't in error state, are we in a loading state?
        if(this.state.loading) {
          return (
            <div>
              <p>Loading...</p>
            </div>
          );
        }

        return (
            <div id="eWrapper">
                <div id="sidebar">
                    <SideBar />
                </div>
                    <div id="contentwrapper">
                        <h1 id="eTitle">Employee Details</h1>
                    <div id="eContent">
                        <Card>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Full Name and Position</th>
                                    <th>Address</th>
                                    <th>Phone Number</th>
                                    <th>Hire Date</th>
                                    <th>Salary Bonus</th>
                                    </tr>
                                </thead>
                                <EmployeeInfo employees={this.state.employees}/>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        );
      }
}
export default EmployeesContainer;