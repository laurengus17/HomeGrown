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
    <div>
      <ul className='profile_list'>
        <li>
          <img className='profile_photo' src={user.imgURL} alt='profile'></img>
        </li>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
      </ul>
      <div>
        <h4>🪴 I Have Added:</h4>
        <UserPlants userId={userId} />
      </div>
      <div>
        <div>
          <i className="fas fa-leaf" />
          <h4>one day I will grow...</h4>
          <UserWishlist userId={userId} />
        </div>
      </div>
    </div>
  );
}
export default UserProfilePage;
