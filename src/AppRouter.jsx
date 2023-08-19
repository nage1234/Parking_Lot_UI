import React, { lazy } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ParkingLotMain from './components/ParkingLotMain';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<ParkingLotMain />} />
                <Route path="/bulletin" element={<ParkingLotMain />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;