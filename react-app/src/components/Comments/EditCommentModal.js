import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from './EditCommentForm';
import '../PlantPage/PlantPage.css'

function EditCommentModal({ comment, plantId }) {
const [showModal, setShowModal] = useState(false);

return (
    <>
    <button className='edit_comment_button' onClick={() => setShowModal(true)}>
        <i className="fas fa-edit" />
    </button>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <EditCommentForm plantId={plantId} comment={comment} setShowModal={setShowModal}/>
        </Modal>
    )}
    </>
);
}

export default EditCommentModal;