import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getUserPlants, updatePlant } from '../../store/plants';
import './EditPlantModal.css'

const EditPlantForm = ({ setShowModal, plant, userId }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imgURL, setImgURL] = useState(null)
    const [care, setCare] = useState('');
    const [light, setLight] = useState('low');
    const [size, setSize] = useState('small');
    const [difficulty, setDifficulty] = useState(1);
    const [variety, setVariety] = useState('Air Plant');


    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const updateCare = (e) => {
        setCare(e.target.value);
    };

    const updateLight = (e) => {
        setLight(e.target.value);
    };

    const updateSize = (e) => {
        setSize(e.target.value);
    };

    const updateDifficulty = (e) => {
        setDifficulty(e.target.value);
    };

    const updateVariety = (e) => {
        setVariety(e.target.value);
    };

    const updateImage = (e) => {
        setImgURL(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const plantId = plant.id

        let updatedPlant = await dispatch(updatePlant(name,
            description,
            imgURL,
            care,
            light,
            size,
            difficulty,
            variety,
            userId,
            plantId));
        if (updatedPlant) {
            dispatch(getUserPlants(userId))
            setShowModal(false)
        }
    }

    return (
    <div className='edit_plant_container'>
        <div className='edit_plant_structure'>
            <form onSubmit={handleSubmit}>
            <h2 className='edit_plant_title'>Update Plant</h2>
            <div className='edit_plant_body'>
                <input
                className='input'
                type='text'
                name='name'
                onChange={updateName}
                value={name}
                placeholder={plant.name}
                ></input>
                <input
                className='input'
                type='textarea'
                name='description'
                onChange={updateDescription}
                value={description}
                placeholder={plant.description}
                ></input>
                <input
                type='textarea'
                className='input'
                name='care'
                onChange={updateCare}
                value={care}
                placeholder={plant.care}
                ></input>
                <label className='edit_plant_label'>Light</label>
                <select
                className='bigger_input'
                name='light'
                onChange={updateLight}
                value={light}
                >
                    <option value='low'>Low Light</option>
                    <option value='average'>Partially Shaded</option>
                    <option value='high'>Direct Light</option>
                </select>
                <label className='edit_plant_label'>Size</label>
                <select
                className='bigger_input'
                name='size'
                onChange={updateSize}
                value={size}
                >
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
                <label className='edit_plant_label'>Difficulty</label>
                <select
                className='bigger_input'
                name='difficulty'
                onChange={updateDifficulty}
                value={difficulty}
                >
                    <option value={1}>1 (Easy)</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5 (Difficult)</option>
                </select>
                <label className='edit_plant_label'>Variety</label>
                <select
                className='bigger_input'
                name='variety'
                onChange={updateVariety}
                value={variety}
                placeholder={plant.variety}
                >
                    <option value='Air Plant'>Air Plant</option>
                    <option value='Calathea'>Calathea</option>
                    <option value='Fern'>Fern</option>
                    <option value='Fiddle Leaf Fig'>Fiddle Leaf Fig</option>
                    <option value='Flowers'>Flowers</option>
                    <option value='Money Tree'>Money Tree</option>
                    <option value='Monstera'>Monstera</option>
                    <option value='Palm'>Palm</option>
                    <option value='Peperomia'>Peperomia</option>
                    <option value='Philodendron'>Philodendron</option>
                    <option value='Pothos'>Pothos</option>
                    <option value='Snake Plant'>Snake Plant</option>
                    <option value='Succulent'>Succulent</option>
                </select>
                <label className='edit_plant_label'>Plant Picture</label>
                <input
                className='file_input'
                type='file'
                name='imgURL'
                onChange={updateImage}
                ></input>
            </div>
            <button className='edit_plant_button' type='submit'>Submit</button>
            </form>
        </div>
    </div>
    );
};

export default EditPlantForm;
