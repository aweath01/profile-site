import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TeamRow from './TeamRow';
import { getTeamData } from '../../data';
import {Link} from 'react-router-dom';

class TeamsPanel extends React.Component {
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
            <Card>
            <Card.Body>
                <Card.Title>Teams</Card.Title>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Team Name</th>
                        <th># Employees</th>
                        </tr>
                    </thead>
                    <TeamRow teams={this.state.teams}/>
                </Table>
            </Card.Body>
            <Card.Footer>
            <Link to="/Teams">
                <Button variant="secondary" size="lg" block>
                    View All Team Data
                </Button>
            </Link>
            </Card.Footer>
        </Card>
        );
      }
}
export default TeamsPanel;