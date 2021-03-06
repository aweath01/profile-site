import React from "react";
import Nav from 'react-bootstrap/Nav';
import './SideBar.css';
import {Link} from 'react-router-dom';

function SideBar() {
    return(
        <div>
            <div id="side-linx">
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link><Link to="/">Overview</Link></Nav.Link>
                    <Nav.Link><Link to="/Projects">Projects</Link></Nav.Link>
                    <Nav.Link><Link to="/Teams">Teams</Link></Nav.Link>
                    <Nav.Link><Link to="/Employees">Employees</Link></Nav.Link>
                </Nav>
            </div>
        </div>

)
}
export default SideBar;