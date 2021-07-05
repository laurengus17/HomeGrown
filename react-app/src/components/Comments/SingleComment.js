import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const SingleComment = ({ comment, plantId }) => {
    const dispatch = useDispatch();


    return (
        <>
            <div>
                <h2>{comment.title}</h2>
            </div>
        </>
    )
}

export default SingleComment;