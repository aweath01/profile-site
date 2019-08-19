import React from 'react';
import ProjectsPanel from './ProjectsPanel';
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel';
import CardDeck from 'react-bootstrap/CardDeck';
import './Content.css';


function Content() {
    return(
        <div id="wrapper">
            <h1 id="title">Overview</h1>
            
            <CardDeck>
                <div id="content">
                    <div id="projectspanel">
                    <ProjectsPanel />
                    </div>
                    <div id="teamspanel">
                    <TeamsPanel />
                    </div>
                    <div id="employeespanel">
                    <EmployeesPanel />
                    </div>
                </div>
            </CardDeck>
        </div>



    )
}
export default Content;