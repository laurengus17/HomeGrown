import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <div className='users_specific_growing'>
        <Link className='link' to={`/greenhouse/${user.id}`}>
          <img className='user_picture' src={user.imgURL} alt='profile' />
          <h4 className='user_text_growing'>{user.username}'s Greenhouse</h4>
        </Link>
      </div>
    );
  });

  return (
    <>
      <h1 className='what_growing_title'>What's Everyone Growing?</h1>
      <h4 className='meet_title'>Meet Other Home Growers</h4>
      <div className='users_container'>
      {userComponents}
      </div>
    </>
  );
}

export default UsersList;
