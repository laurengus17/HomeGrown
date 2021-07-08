import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp, login } from '../../store/session';
import './SignUpModal.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [imgURL, setImgURL] = useState(null)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, last_name, username, email, password, imgURL));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  }

  const updateLastname = (e) => {
    setLastname(e.target.value);
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateImage = (e) => {
    setImgURL(e.target.files[0]);
  }

  if (user) {
    return <Redirect to='/home' />;
  }

  const demoLogin = () => {
    dispatch(login('demoMcdemo@demo.io', 'password'))
  }

  return (
    <div className='signup_container'>
      <div className='signup_structure'>
        <form onSubmit={onSignUp}>
          {/* <div> */}
            {/* {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))} */}
          {/* </div> */}
          <h2 className='signup_title'>Join The Club</h2>
          <div className='signup_body'>
            <input
              className='input'
              placeholder='First Name'
              type='text'
              name='first_name'
              onChange={updateFirstname}
              value={first_name}
            ></input>
            <input
              className='input'
              placeholder='Last Name'
              type='text'
              name='last_name'
              onChange={updateLastname}
              value={last_name}
            ></input>
            <input
              className='input'
              type='text'
              placeholder='Username'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
            <input
              className='input'
              type='text'
              placeholder='Email'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
            <input
              className='input'
              type='password'
              name='password'
              placeholder='Password'
              onChange={updatePassword}
              value={password}
            ></input>
            <input
              className='input'
              type='password'
              name='repeat_password'
              placeholder='Repeat Password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
            <div className='wrap'>
            <label className='profile_photo_label' htmlFor='upload'>Profile Photo</label>
            <input
              className='input'
              type='file'
              name='imgURL'
              onChange={updateImage}
            ></input>
            </div>
          </div>
          <button className='signup_button' type='submit'>Sign Up</button>
          <button className='demo_user' onClick={demoLogin}>Demo User</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
