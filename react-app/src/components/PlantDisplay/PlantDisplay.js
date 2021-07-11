import React from "react";
import { Link } from "react-router-dom";
import './PlantDisplay.css'


const PlantDisplay = ({ plant }) => {
    return (
            <Link className='plant_display_link' to={`/plants/${plant.id}`}>
            <div className='plant_container'>
                <img src={plant.imgURL} alt={plant.name} className='plant_img'/>
                <div><span className='plant_display_name'>{plant.name}</span></div>
            </div>
            </Link>
    )
}

export default PlantDisplay;