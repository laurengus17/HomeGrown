import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { logout } from '../../store/session';
import '../Navigation/NavBar.css'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push(`/home`)
  };

  return <button className='logout_button' onClick={onLogout}>Log Out</button>;
};

export default LogoutButton;
