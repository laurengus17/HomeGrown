import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginFormModal.css'

function LoginFormModal() {
const [showModal, setShowModal] = useState(false);

return (
    <>
    <button className='nav-login' onClick={() => setShowModal(true)}>
        <i class="fas fa-sign-in-alt" />
    </button>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <LoginForm />
        </Modal>
    )}
    </>
);
}

export default LoginFormModal;
