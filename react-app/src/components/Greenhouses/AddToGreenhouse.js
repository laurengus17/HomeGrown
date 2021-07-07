import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createGreenhouse } from '../../store/greenhouses';

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
        <div>
            <form onSubmit={handleSubmit}>
            <h4>Add To Greenhouse</h4>
            <button type='submit'>
                <i className="fas fa-home" />
            </button>
            </form>
        </div>
    )
}

export default AddToGreenhouse;