import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from './EditCommentForm';


function EditCommentModal({ comment, plantId }) {
const [showModal, setShowModal] = useState(false);

return (
    <>
    <button onClick={() => setShowModal(true)}>
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