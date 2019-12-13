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
            <div class="white-txt">
              <p>Error: unable to load project data</p>
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
                <Card.Title>Projects</Card.Title>
                <Link to="/Projects">
                <Button variant="outline-dark" size="lg" block>
                    View All Project Data
                </Button>
                </Link>
                <Table striped hover>
                    <thead>
                        <tr>
                        <th>Project Name</th>
                        <th>Active # Days</th>
                        </tr>
                    </thead>
                    <tbody>
                      <ProjectRow projects={this.state.projects}/>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        );
      }
}
export default ProjectsPanel;



