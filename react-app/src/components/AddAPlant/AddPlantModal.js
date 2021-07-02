import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddPlantForm from './AddPlantForm';


function AddPlantModal() {
const [showModal, setShowModal] = useState(false);

return (
    <>
    <button onClick={() => setShowModal(true)}>
        🪴
    </button>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <AddPlantForm />
        </Modal>
    )}
    </>
);
}

export default AddPlantModal;
