import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createPlant } from '../../store/plants';
import './PlantModal.css'

const AddPlantForm = ({ setShowModal }) => {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

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

        const userId = user.id

        let createdPlant = await dispatch(createPlant(name,
            description,
            imgURL,
            care,
            light,
            size,
            difficulty,
            variety,
            userId));
        if (createdPlant) {
            history.push(`/browse_all`)
            setShowModal(false)
        }
    }

    return (
    <div className='plant_add_container'>
        <div className='plant_add_structure'>
            <form onSubmit={handleSubmit}>
            <h2 className='plant_add_title'>Add A Plant</h2>
            <div className='add_plant_body'>
                <input
                placeholder='Plant Name'
                className='input'
                type='text'
                name='name'
                onChange={updateName}
                value={name}
                ></input>
                <input
                placeholder='Description'
                className='input'
                type='textarea'
                name='description'
                onChange={updateDescription}
                value={description}
                ></input>
                <input
                placeholder='Care'
                className='input'
                type='textarea'
                name='care'
                onChange={updateCare}
                value={care}
                ></input>
                <label className='add_plant_label'>Light</label>
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
                <label className='add_plant_label'>Size</label>
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
                <label className='add_plant_label'>Difficulty</label>
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
                <label className='add_plant_label'>Variety</label>
                <select
                className='bigger_input'
                name='variety'
                onChange={updateVariety}
                value={variety}
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
                <label className='add_plant_label'>Plant Picture</label>
                <input
                className='file_input'
                type='file'
                name='imgURL'
                onChange={updateImage}
                ></input>
            </div>
            <button className='add_plant_button' type='submit'>Submit</button>
            </form>
        </div>
    </div>
    );
};

export default AddPlantForm;
