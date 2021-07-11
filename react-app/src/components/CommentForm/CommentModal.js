import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentForm from './CommentForm';
import '../PlantPage/PlantPage.css'

function AddCommentModal({ plantId }) {
const [showModal, setShowModal] = useState(false);

return (
    <>
    <button className='add_comment_button' onClick={() => setShowModal(true)}>
        Add Comment
    </button>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <CommentForm setShowModal={setShowModal} plantId={plantId} />
        </Modal>
    )}
    </>
);
}

export default AddCommentModal;