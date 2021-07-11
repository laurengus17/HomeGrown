import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserPlants from '../UserPlants/UserPlants';
import UserWishlist from '../Wishlists/UserWishlist';
import './ProfilePage.css';

function UserProfilePage() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className='profile_page_container'>
      <div className='user_info_profile'>
      <ul className='profile_list'>
        <li>
          <img className='profile_photo' src={user.imgURL} alt='profile'></img>
        </li>
        <li>
          <h4>Hi, {user.first_name} {user.last_name}</h4>
        </li>
        <li>
          <strong>My Account Info</strong>
        </li>
        <li>
          <strong>Username: &nbsp; </strong><br></br>
          <span className='account_text'>{user.username}</span> 
        </li>
        <li>
          <strong>Email: &nbsp; </strong>
          <span className='account_text'>{user.email}</span>
        </li>
      </ul>
      </div>
      <div className='plants_added_container'>
        <h4 className='plants_i_added'>🪴 I Have Added:</h4>
        <UserPlants userId={userId} />
      </div>
      <div className='outer_container_wishlist'>
          <h4 className='plants_i_added'>
            <i className="fas fa-leaf" id='profile_leaf' />&nbsp;
            one day I will grow...</h4>
          <UserWishlist userId={userId} />
      </div>
    </div>
  );
}
export default UserProfilePage;
