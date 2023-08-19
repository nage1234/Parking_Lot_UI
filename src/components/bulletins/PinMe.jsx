import React, { useState } from 'react';
import '../../styles/PinMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const PinMe = ({ x, y, id }) => {
    const [bulletinNews, setBulletinNews] = useState('Add announcement');
    const marginXY = {
        position: "absolute",
        top: x+"px",
        left: y+"px"
    };
    console.log("marginXY = ",marginXY);
    return (
        <>
            <div className="pinMeContent" >
                <div className="parentMenuIcon">
                    <div className="editIcon">
                        <FontAwesomeIcon icon={faPen} />
                    </div>
                    <div className="deleteIcon">
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                </div>
                <div>
                    {bulletinNews}
                </div>                
            </div>
        </>
        
    )
};
export default PinMe;