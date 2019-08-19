import React from 'react';
import Table from 'react-bootstrap/Table';
import ProjectRow from './ProjectRow';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getProjectsData } from '../../data';
import {Link} from 'react-router-dom';


class ProjectsPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            errored: false,
            projects: []
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        getProjectsData()
          .then(projects => this.setState({ loading: false, projects }))
          .catch(err => {
            console.error('Unable to load project data', err.message);
            this.setState({ errored: true });
          });
      }
    
    
    render() {
        // Are we in an error state? If so show an error message.
        if(this.state.errored) {
          return (
            <div>
              <p>Error: unable to load project data</p>
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
                <Card.Title>Projects</Card.Title>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Project Name</th>
                        <th>Active # Days</th>
                        </tr>
                    </thead>
                    <ProjectRow projects={this.state.projects}/>
                </Table>
            </Card.Body>
            <Card.Footer>
            <Link to="/Projects">
                <Button variant="secondary" size="lg" block>
                    View All Project Data
                </Button>
            </Link>
            </Card.Footer>
        </Card>
        );
      }
}
export default ProjectsPanel;



