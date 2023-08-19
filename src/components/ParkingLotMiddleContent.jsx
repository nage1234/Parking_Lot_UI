import React from 'react';
import '../styles/ParkingLotMiddleContent.css';
import LeftContent from './LeftContent';
import BulletinBoard from './bulletins/BulletinBoard';
import RightContent from './RightContent';
import { useState } from 'react';

const ParkingLotMiddleContent = () => {
    const [rightComponent, setRightComponent] = useState('');
    const leftMenuClick = (key) => {
        let rightComp;
        if (key === 'bulletin') {
            rightComp = (
                < BulletinBoard />
            );
        }
        setRightComponent(rightComp);
    };
    return (
        <>
            <div className="left">
                <LeftContent onMenuClick={leftMenuClick} />
            </div>
            <div className="right">
                <RightContent comp={rightComponent} />
            </div>            
        </>
    );
};
export default ParkingLotMiddleContent;