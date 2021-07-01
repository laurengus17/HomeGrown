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
                <li>
                    <Link to={`/users/${user.id}`}>
                        <div>{user.first_name}'s profile</div>
                    </Link>
                </li>
                <li>
                    <Link to={`/greenhouse/${user.id}`}>
                        <div>{user.first_name}'s Greenhouse</div>
                    </Link>
                </li>
                <li>
                    <Link to={`/friends/${user.id}`}>
                        <div>{user.first_name}'s Friends</div>
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