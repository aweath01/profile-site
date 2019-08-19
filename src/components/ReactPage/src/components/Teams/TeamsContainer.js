import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import TeamInfo from './TeamInfo';
import { getTeamData } from '../../data';
import SideBar from '../SideBar';
import '../Employees/EmployeesContainer.css';

class TeamsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            errored: false,
            teams: []
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        getTeamData()
          .then(teams => this.setState({ loading: false, teams }))
          .catch(err => {
            console.error('Unable to load team data', err.message);
            this.setState({ errored: true });
          });
    }
    
    render() {
        // Are we in an error state? If so show an error message.
        if(this.state.errored) {
          return (
            <div>
              <p>Error: unable to load team data</p>
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
                        <h1 id="eTitle">Team Details</h1>
                    <div id="eContent">
                        <Card>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Projects</th>
                                    <th>Employees</th>
                                    <th>Team Lead</th>
                                    </tr>
                                </thead>
                                <TeamInfo teams={this.state.teams}/>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        );
      }
}
export default TeamsContainer;