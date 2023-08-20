import React, { useState } from 'react';
import '../../styles/BulletinBoard.css';
import PinMe from './PinMe';

const BulletinBoard = () => {
    const [pinMeAttributes, setPinMeAttributes] = useState([]);
    const [countId, setCountId] = useState(0);

    const dragPinIt = () => {

    };

    const onDropPinIt = () => {
    };

    const deletePinMeCB = (id) => {
        //int index = pinMeAttributes.findIndex(item => item.id === id);
        setPinMeAttributes(pinMeAttributes.filter(item => item.id !== id));
        setCountId(countId-1);
    }

    const onDragDropContainer = (evt) => {
        evt.preventDefault();
        console.log("on Drag Over exit in container", evt.clientX, " --- y = ", evt.clientY);
        const { top, left } = evt.target.getBoundingClientRect();
        const data = createPinItTemplate(top, left, evt.clientX, evt.clientY, countId+1);
        setPinMeAttributes((existingData) => [...existingData, data]);
        setCountId(countId+1);
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
                left: item.x + "px",
                top: item.y + "px",
                position: "absolute"
            };
            return (

                <div style={marginXY}>
                <PinMe id={item.id} deletePinMeCB={deletePinMeCB}/>
                </div>

            )
        })
        return comp;
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    const trackTheCoord = (event) => {
        const mousePos = { x: event.clientX, y: event.clientY };
        const mousePosText = document.getElementById('mouse-pos');
        mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
    };

    return (
        <>
            <div className="leftBoard">
                <div draggable="true" className="pinItComp" >Pin It</div>                    
            </div>
            <div onDrop={(evt) => onDragDropContainer(evt)} onDragOver={(evt) => allowDrop(evt)}  onMouseMove={(e)=>trackTheCoord(e)} className="rightContentArea">
                <div id="mouse-pos">helllo!</div>
                { createBoardComponents() }
            </div>
        </>
    );
}
export default BulletinBoard;