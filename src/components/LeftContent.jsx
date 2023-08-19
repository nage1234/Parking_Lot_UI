import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/LeftContent.css';

const LeftContent = ({ onMenuClick }) => {

    return (
        <>
            <ul>
                <li>
                    <NavLink to="/bulletin" onClick={() => onMenuClick('bulletin')}>Bulletin Pin Board</NavLink>
                </li>
                <li>
                    Manage Parking Lot
                </li>
            </ul>

        </>
    );
};
export default LeftContent;