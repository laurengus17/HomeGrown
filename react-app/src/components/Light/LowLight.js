import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import { getLightPlants } from '../../store/plants';

const LowLight = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants)
    const plants = Object.values(plantState)

    const light = 'low'

    useEffect(() => {
        dispatch(getLightPlants(light))
    }, [dispatch])

    console.log(plants)

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

export default LowLight;