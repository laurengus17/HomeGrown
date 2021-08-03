import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PlantDisplay from '../PlantDisplay/PlantDisplay';
import { getBalconyPlants } from '../../store/plants';

const Balcony = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants.balcony)
    const plants = Object.values(plantState)

    useEffect(() => {
        dispatch(getBalconyPlants())
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

export default Balcony;