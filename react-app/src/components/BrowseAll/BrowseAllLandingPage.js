import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlants } from '../../store/plants'
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import AddPlantModal from '../AddAPlant/AddPlantModal';
import './BrowseAll.css'

const BrowseAllLandingPage = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants)
    const plants = Object.values(plantState)

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])


    return (
        <>
            <h2>ALL PLANTS</h2>
            <h4>Don't See the plant you're looking for? Click Here: 
                <AddPlantModal />
            </h4>
            <div className='plant_outer_container'>
                {plants.map((plant) => 
                    <PlantDisplay plant={plant} />
                )}
            </div>
        </>
    )
}

export default BrowseAllLandingPage;