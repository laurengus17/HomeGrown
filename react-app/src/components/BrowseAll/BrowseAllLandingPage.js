import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlants } from '../../store/plants';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import AddPlantModal from '../AddAPlant/AddPlantModal';
import LightButton from '../Light/LightButton';
import SizeButton from '../Size/SizeButton';
import DifficultyButton from '../Difficulty/DifficultyButton';
import VarietyButton from '../Variety/VarietyButton';
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
            <h4 className='add_plant_link'>Don't see the plant you're looking for? Click Here:   
                <AddPlantModal />
            </h4>
            <div className='filter_container'>
                <LightButton />
                <SizeButton />
                <DifficultyButton />
                <VarietyButton />
            </div>
            <div className='plant_outer_container'>
                {plants.map((plant) => 
                    <PlantDisplay plant={plant} />
                )}
            </div>
        </>
    )
}

export default BrowseAllLandingPage;