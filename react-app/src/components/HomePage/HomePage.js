import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import LowMaintenance from './LowMaintenance';
import Small from './Small'
import Balcony from './Balcony';
import { useDispatch, useSelector } from 'react-redux';
import { getPlants } from '../../store/plants';
import './HomePage.css'

const HomePage = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants.all)
    const plants = Object.values(plantState)

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])

    return (
        <div>
        <h2 className='home_title'>Join Our Indoor Jungle</h2>
            <div className='home_container'>
                <div className='list_specific_div'>
                <h2 className='list_title_1'>Low Maintenance</h2>
                <div className='list_container'>
                    <LowMaintenance />
                </div>
                </div>
                <div className='list_specific_div'>
                <h2 className='list_title_2'>Balcony Lovers</h2>
                <div className='list_container'>
                    <Balcony />
                </div>
                </div>
                <div className='list_specific_div'>
                <h2 className='list_title_3'>Small Spaces, Small 🪴</h2>
                <div className='list_container'>
                    <Small />
                </div>
                </div>
            </div>
        <Link className='browse_home_link' to='/browse_all' exact={true} >
            <h4 className='browse_link'>
                <i className="fas fa-seedling" />
                &nbsp; Browse All Plants &nbsp; &nbsp;
                <i className="fas fa-seedling" />
                </h4>
        </Link>
        </div>
    )
}

export default HomePage;