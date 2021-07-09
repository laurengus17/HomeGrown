import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import { getSizePlants } from '../../store/plants';
import './Size.css';

const SmallPlantsLink = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants.all)
    const plants = Object.values(plantState)

    const size = 'small'

    useEffect(() => {
        dispatch(getSizePlants(size))
    }, [dispatch])

    return (
        <>
        <h2 className='size_title'>Small Space No Problem</h2>
        <div className='browse_link_div'>
        <Link className='back_browse_all' to='/browse_all'>
            <i className="fas fa-seedling" />
            &nbsp; Back to Browse All &nbsp;&nbsp;
            <i className="fas fa-seedling" />
        </Link>
        </div>
        {plants.length ?
                <div className='plant_display_container'>
                        {plants.map((plant) => (
                            <PlantDisplay plant={plant} />
                        ))}
                </div>
                :
                null
                }
        </>
    )
}

export default SmallPlantsLink;