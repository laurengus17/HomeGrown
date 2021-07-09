import React from 'react'
import { Link } from 'react-router-dom';
import LowMaintenance from './LowMaintenance';
import Small from './Small'
import Balcony from './Balcony';
import './HomePage.css'

const HomePage = () => {

    return (
        <div>
        <h2 className='home_title'>Join Our Indoor Jungle</h2>
            <div className='home_container'>
                <div className='list_container'>
                <h2 className='list_title'>Low Maintenance</h2>
                    <LowMaintenance />
                </div>
                <div className='list_container'>
                    <h2 className='list_title'>Balcony Lovers</h2>
                    <Balcony />
                </div>
                <div className='list_container'>
                    <h2 className='list_title'>Small Spaces, Small 🪴</h2>
                    <Small />
                </div>
            </div>
        <Link to='/browse_all' exact={true} >
            <h4 className='browse_link'>Browse All Plants</h4>
        </Link>
        </div>
    )
}

export default HomePage;