import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import { getLightPlants } from '../../store/plants';

const AverageLight = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants)
    const plants = Object.values(plantState)

    const light = 'average'

    useEffect(() => {
        dispatch(getLightPlants(light))
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

export default AverageLight;