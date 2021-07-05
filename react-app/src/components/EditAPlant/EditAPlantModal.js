import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPlantForm from './EditAPlantForm';


function EditPlantModal({ plant, userId}) {
const [showModal, setShowModal] = useState(false);

return (
    <>
    <button onClick={() => setShowModal(true)}>
        <i className="fas fa-edit" />
    </button>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <EditPlantForm setShowModal={setShowModal} plant={plant} userId={userId} />
        </Modal>
    )}
    </>
);
}

export default EditPlantModal;
