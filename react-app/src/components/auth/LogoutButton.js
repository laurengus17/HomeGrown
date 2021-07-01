import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import '../Navigation/NavBar.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className='logout_button' onClick={onLogout}>Log Out</button>;
};

export default LogoutButton;
