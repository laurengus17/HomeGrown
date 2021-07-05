import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getUserPlants, updatePlant } from '../../store/plants';


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
        <form onSubmit={handleSubmit}>
        <div>
            <label>Plant Name</label>
            <input
            type='text'
            name='name'
            onChange={updateName}
            value={name}
            placeholder={plant.name}
            ></input>
        </div>
        <div>
        <label>Description</label>
            <input
            type='textarea'
            name='description'
            onChange={updateDescription}
            value={description}
            placeholder={plant.description}
            ></input>
        </div>
        <div>
            <label>Care</label>
            <input
            type='textarea'
            name='care'
            onChange={updateCare}
            value={care}
            placeholder={plant.care}
            ></input>
        </div>
        <div>
            <label>Light</label>
            <select
            name='light'
            onChange={updateLight}
            value={light}
            >
                <option value='low'>Low Light</option>
                <option value='average'>Partially Shaded</option>
                <option value='high'>Direct Light</option>
            </select>
        </div>
        <div>
            <label>Size</label>
            <select
            name='size'
            onChange={updateSize}
            value={size}
            >
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
        </div>
        <div>
            <label>Difficulty</label>
            <select
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
        </div>
        <div>
            <label>Variety</label>
            <select
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
        </div>
        <div>
            <label>Plant Picture</label>
            <input
            type='file'
            name='imgURL'
            onChange={updateImage}
            ></input>
        </div>
        <button type='submit'>Add Plant</button>
        </form>
    );
};

export default EditPlantForm;
