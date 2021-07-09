import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import { getSmallPlants } from '../../store/plants';

const Small = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants.size)
    const plants = Object.values(plantState)

    useEffect(() => {
        dispatch(getSmallPlants())
    }, [dispatch])

    console.log(plants, 'SMALL')

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

export default Small;