import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlants } from '../../store/plants'

const BrowseAllLandingPage = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants)
    // const plants = Object.values(plantState)
    // console.log(plants)

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])

    return (
        <>
            <h2>ALL PLANTS</h2>
            <p></p>
        </>
    )
}

export default BrowseAllLandingPage;