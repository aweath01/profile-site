import React from 'react';
import SideBar from '../SideBar';
import Content from './Content';
import './Overview.css';


function Overview() {
    return(
        <div>
            <div id="main">
                <div id="sidebar"> <SideBar /> </div>
                <div id="content"> <Content /> </div>
            </div>
        </div>
    )
}
export default Overview;