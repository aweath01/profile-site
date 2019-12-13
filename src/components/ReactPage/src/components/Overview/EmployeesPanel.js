import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EmployeeRow from './EmployeeRow';
import { getEmployeeData } from '../../data';
import {Link} from 'react-router-dom';
import './Content.css'

class EmployeesPanel extends React.Component {
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
            <div class="white-txt">
              <p>Error: unable to load employee data</p>
            </div>
          );
        }
    
        // If we aren't in error state, are we in a loading state?
        if(this.state.loading) {
          return (
            <div class="white-txt">
              <p>Loading...</p>
            </div>
          );
        }

        return (
            <Card>
            <Card.Body>
                <Card.Title>Employees</Card.Title>
                <Link to="/Employees">
                  <Button variant="outline-dark" size="lg" block>
                    View All Employee Data
                  </Button>
                </Link>  
                <Table striped hover id="employeespanel">
                    <thead>
                        <tr>
                        <th>Full Name</th>
                        <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                      <EmployeeRow employees={this.state.employees}/>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        );
      }
}
export default EmployeesPanel;