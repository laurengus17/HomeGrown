import React from 'react'
import { Link } from 'react-router-dom';
import LowMaintenance from './LowMaintenance';
import Small from './Small'
import Balcony from './Balcony';

const HomePage = () => {

    return (
        <>
            <h2>Home Page</h2>
            <div>
                <h2>Low Maintenance</h2>
                <LowMaintenance />
            </div>
            <div>
                <h2>Balcony Lovers</h2>
                <Balcony />
            </div>
            <div>
                <h2>Small Spaces, Small 🪴</h2>
                <Small />
            </div>
            <Link to='/browse_all' exact={true}>
                Browse All Plants
            </Link>
        </>
    )
}

export default HomePage;