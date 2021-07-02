import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlants } from '../../store/plants'


const HomePage = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants)
    // const plants = Object.values(plantState)
    console.log(plantState)

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])

    return (
        <>
            <h2>HELLO</h2>
            <p></p>
        </>
    )
}

export default HomePage;