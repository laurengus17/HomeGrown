import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentForm from './CommentForm';


function AddCommentModal({ plantId }) {
const [showModal, setShowModal] = useState(false);

return (
    <>
    <button onClick={() => setShowModal(true)}>
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