import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal'
import ProfileButton from './ProfileButton';
import BrowseButton from './BrowseButton';
import SearchBar from './SearchBar';
import logo from '../../images/logo.png'
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const history = useHistory();

  const handleHome = () => {
    history.push('/home')
  }

  return (
    <nav>
      <ul className='navbar_all_items'>
        <li className='left_navbar'>
          <Link to='/home' exact='true' activeclassname='active'>
            <img src={logo} alt='logo' className='logo_img'></img>
          </Link>
          <button className='home_button' onClick={handleHome}>Home</button>
          <BrowseButton />
        </li>
        <SearchBar />
        <>
        <li className='right_navbar'>
          {user ? 
          <>
          <button className='wishlist_button'>
            <i className="fas fa-leaf" />
          </button>
          <ProfileButton user={user} />
          </>
          : 
          <>
          <SignUpFormModal />
          <LoginFormModal />
          </>
          }
        </li>
        </>
      </ul>
    </nav>
  );
}

export default NavBar;
