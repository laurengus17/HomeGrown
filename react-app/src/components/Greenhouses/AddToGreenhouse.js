import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createGreenhouse } from '../../store/greenhouses';
import '../PlantPage/PlantPage.css';

const AddToGreenhouse = ({ plantId }) => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const plantIdInt = parseInt(plantId, 10)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = user.id

        let createdGreenhouse = await dispatch(createGreenhouse(userId, plantIdInt));
        if (createdGreenhouse) {
            history.push(`/greenhouse/${userId}`)
        }
    }

    return (
        <div className='add_to_greenhouse'>
            <form onSubmit={handleSubmit}>
            <div className='greenhouse_left'>
                <h4 className='add_greenhouse_text'>Add To Greenhouse</h4>
            </div>
            <div className='greenhouse_right'>
                <button className='plant_page_greenhouse' type='submit'>
                    <i className="fas fa-home" />
                </button>
            </div>
            </form>
        </div>
    )
}

export default AddToGreenhouse;