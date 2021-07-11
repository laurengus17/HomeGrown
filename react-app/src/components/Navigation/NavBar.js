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

  const handleWishlist = () => {
    history.push(`/users/${user.id}`)
  }

  const handleUsersAll = () => {
    history.push(`/users`)
  }

  return (
    <nav className='navbar_container'>
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
          <button className='users_button' onClick={handleUsersAll}>
            <i className="fas fa-users" />
          </button>
          <button className='wishlist_button' onClick={handleWishlist}>
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
