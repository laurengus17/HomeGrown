import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const demoLogin = () => {
    dispatch(login('demoMcdemo@demo.io', 'password'))
  }

  return (
    <div className='login_container'>
      <div className='login_structure'>
        <form onSubmit={onLogin}>
          {/* <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div> */}
          <h2 className='login_title'>Welcome Back</h2>
          <div className='login_body'>
            <input
              className='input'
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
            <input
              className='input'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
            <button className='login_button' type='submit'>Log In</button>
            <button className='demo_user' onClick={demoLogin}>Demo User</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
