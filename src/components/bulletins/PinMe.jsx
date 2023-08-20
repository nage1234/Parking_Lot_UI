import React, { useState } from 'react';
import '../../styles/PinMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const PinMe = ({ id, deletePinMeCB }) => {
    const [bulletinNews, setBulletinNews] = useState('Add announcement');
    const deletePinMe = () => {
        deletePinMeCB(id);
    }
    return (
        <>
            <div className="pinMeContent" >
                <div className="parentMenuIcon">
                    <div className="editIcon">
                        <FontAwesomeIcon icon={faPen} />
                    </div>
                    <div className="deleteIcon" onClick={(evt) => deletePinMe()}>
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