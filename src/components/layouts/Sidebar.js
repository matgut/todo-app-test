import React from 'react';
import {FaChevronDown, FaInbox, FaRegCalendarAlt,FaRegCalendar} from 'react-icons/fa'



const Sidebar = () => {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar-generic">
                <li><span><FaInbox/></span><span>Inbox</span></li>
                <li><span><FaRegCalendar/></span><span>Today</span></li>
                <li><span><FaRegCalendarAlt/></span><span>Next 7 Days</span></li>
            </ul>
            <div className="sidebar-midle">
                <span><FaChevronDown/></span>
                <h2>Projects</h2>
            </div>
            <ul className="sidebar-projects">
                 projects will be here
            </ul>
            add project component!
        </div>

    );
}

export default Sidebar;