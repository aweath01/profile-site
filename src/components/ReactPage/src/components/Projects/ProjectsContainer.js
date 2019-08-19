import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ProjectInfo from './ProjectInfo';
import { getProjectsData } from '../../data';
import SideBar from '../SideBar';
import '../Employees/EmployeesContainer.css';

class ProjectsContainer extends React.Component {
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
            <div id="eWrapper">
                <div id="sidebar">
                    <SideBar />
                </div>
                    <div id="contentwrapper">
                        <h1 id="eTitle">Project Details</h1>
                    <div id="eContent">
                        <Card>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    </tr>
                                </thead>
                                <ProjectInfo projects={this.state.projects}/>
                            </Table>
                        </Card.Body>        
                    </Card>
                </div>
            </div>
        </div>
        );
      }
}
export default ProjectsContainer;