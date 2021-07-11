import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlantComments } from '../../store/comments';
import SingleComment from './SingleComment';
import '../PlantPage/PlantPage.css'

const PlantComments = ({ plantId }) => {
    const dispatch = useDispatch();
    const commentState = useSelector(state => state.comments)
    const comments = Object.values(commentState)

    useEffect(() => {
        dispatch(getPlantComments(plantId))
    }, [dispatch, plantId])


    return (
        <>
            <div className='all_comments'>
                {comments.map((comment) => 
                    <SingleComment comment={comment} plantId={plantId} />
                )}
            </div>
        </>
    )
}

export default PlantComments;