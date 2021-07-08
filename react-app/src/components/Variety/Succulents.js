import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import { getVarietyPlants } from '../../store/plants';

const Succulents = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants)
    const plants = Object.values(plantState)

    const variety = 'Succulent'

    useEffect(() => {
        dispatch(getVarietyPlants(variety))
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

export default Succulents;