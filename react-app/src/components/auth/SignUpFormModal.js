import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';

function SignUpFormModal() {
const [showModal, setShowModal] = useState(false);

return (
    <>
    <button className='nav-signup' onClick={() => setShowModal(true)}>
        <i class="fas fa-user-plus" />
    </button>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <SignUpForm />
        </Modal>
    )}
    </>
);
}

export default SignUpFormModal;
