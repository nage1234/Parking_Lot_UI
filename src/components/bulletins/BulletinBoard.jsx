import React, { useState } from 'react';
import '../../styles/BulletinBoard.css';
import PinMe from './PinMe';

const BulletinBoard = () => {
    const [pinMeAttributes, setPinMeAttributes] = useState([]);

    const dragPinIt = () => {

    };

    const onDropPinIt = () => {
    };

    const onDragDropContainer = (evt) => {
        evt.preventDefault();
        console.log("on Drag Over exit in container", evt.clientX, " --- y = ", evt.clientY);
        const { top, left } = evt.target.getBoundingClientRect();
        const data = createPinItTemplate(top, left, evt.clientX, evt.clientY, 1);
        setPinMeAttributes((existingData) => [...existingData, data]);
    };

    const createPinItTemplate = (top, left, x, y, id) => {
        const data = {};
        data.top = top;
        data.left = left;
        data.x = x;
        data.y = y;
        data.id = id;
        return data;
    };

    const createBoardComponents = () => {
        const comp = pinMeAttributes.map((item) => {
            const marginXY = {                
                left: (item.x-item.left) + "px",
                top: (item.y - item.top) + "px",
                position: "absolute"
            };
            return (

                <div style={marginXY}>
                <PinMe x={item.x} y={item.y} id={item.id} />
                </div>

            )
        })
        return comp;
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="leftBoard">
                <div draggable="true" className="pinItComp" >Pin It</div>                    
            </div>
            <div onDrop={(evt) => onDragDropContainer(evt)} onDragOver={(evt) => allowDrop(evt)}  className="rightContentArea">
                { createBoardComponents() }
            </div>
        </>
    );
}
export default BulletinBoard;