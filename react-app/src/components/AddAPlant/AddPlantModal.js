import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddPlantForm from './AddPlantForm';
import '../BrowseAll/BrowseAll.css';

function AddPlantModal() {
const [showModal, setShowModal] = useState(false);

return (
    <>
    <button className='add_button_modal' onClick={() => setShowModal(true)}>
        🪴
    </button>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <AddPlantForm setShowModal={setShowModal}/>
        </Modal>
    )}
    </>
);
}

export default AddPlantModal;
