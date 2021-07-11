import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'


function ProfileButton({ user }) {
const [showMenu, setShowMenu] = useState(false);

useEffect(() => {
    const closeMenu = () => setShowMenu(false)
        if(showMenu){
            document.addEventListener('click', closeMenu);
        }

        return () => document.removeEventListener('click', closeMenu);
}, [showMenu])

const switchMenu = () => setShowMenu(prevState => !prevState);

return (
    <div>
        <button className='user_button' onClick={switchMenu}>
            <i className="fas fa-house-user" />
            <i className="fas fa-caret-down" />
        </button>
        {showMenu &&
            <ul className='user_dropdown'>
                <li className='link_user'>
                    <Link to={`/users/${user.id}`} className='link_profile'>
                        <p className='link_text'>{user.first_name}'s Profile</p>
                    </Link>
                </li>
                <li className='link_user'>
                    <Link to={`/greenhouse/${user.id}`} className='link_profile'>
                        <p className='link_text'>Greenhouse</p>
                    </Link>
                </li>
                <li>
                    <LogoutButton />
                </li>
            </ul>
        }
    </div>
)

}
export default ProfileButton;