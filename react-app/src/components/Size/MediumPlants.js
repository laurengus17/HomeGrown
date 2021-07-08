import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import { getSizePlants } from '../../store/plants';

const MediumPlants = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants)
    const plants = Object.values(plantState)

    const size = 'medium'

    useEffect(() => {
        dispatch(getSizePlants(size))
    }, [dispatch])

    return (
        <>
        {plants.length ?
                <>
                        {plants.map((plant) => (
                            <PlantDisplay plant={plant} />
                        ))}
                </>
                :
                null
                }
        </>
    )
}

export default MediumPlants;