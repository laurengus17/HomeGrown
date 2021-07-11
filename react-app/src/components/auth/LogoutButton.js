import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import { logout } from '../../store/session';
import '../Navigation/NavBar.css'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push(`/home`)
  };

  return (
    <>
    <Link to='/home'>
      <button className='logout_button' onClick={onLogout}>Log Out</button>
    </Link>
    </>
    ) 
    
};

export default LogoutButton;
