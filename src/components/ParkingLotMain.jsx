import React from 'react';
import '../styles/ParkingLotMain.css';
import ParkingLotMiddleContent from './ParkingLotMiddleContent';

function ParkingLotMain() {
    //const [data, setData] = useState();
    return (
        <div className="mainScreen">
            <div className="top">
                <h3>Parking Lot Management System</h3>
            </div>
            <div className="bottom">
                <ParkingLotMiddleContent />
            </div>
        </div>
    )
}
export default ParkingLotMain