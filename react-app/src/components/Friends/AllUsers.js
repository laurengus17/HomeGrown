import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

function AllUsers() {
    const [users, setUsers] = useState([]);
    const user = useSelector(state => state.session.user);
    const userId = user.id

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
        <li key={user.id}>
            <NavLink to={`/greenhouse/${user.id}`}>{user.username}</NavLink>
            <AddFriend userId={userId} friendId={user.id} />
        </li>
        );
    });

    return (
        <>
        <h1>User List: </h1>
        <ul>{userComponents}</ul>
        </>
    );
}

export default AllUsers;
