import React from 'react';
import SideBar from './SideBar';
import '../components/Overview/Overview.css';


function NotFound() {
    return(
        <div>
            <div id="main">
                <div id="sidebar"> <SideBar /> </div>
                <div id="content"> 
                    <h1>Page Not Found</h1>
                </div>
            </div>
        </div>
    )
}
export default NotFound;