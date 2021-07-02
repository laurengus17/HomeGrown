import React from "react";
import { Link } from "react-router-dom";
import './PlantDisplay.css'


const PlantDisplay = ({ plant }) => {
    return (
            <Link to={`/plants/${plant.id}`}>
            <div className='plant_container'>
                <img src={plant.imgURL} alt={plant.name} className='plant_img'/>
                <div>{plant.name}</div>
                <div>{plant.variety}</div>
            </div>
            </Link>
    )
}

export default PlantDisplay;