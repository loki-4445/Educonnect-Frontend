import React from 'react'
import './LoginSign.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import user_icon from '../../assests/images/person.png'
import password_icon from '../../assests/images/password.png'
import email_icon from '../../assests/images/email.png'
function LoginSign() {
  const navigate = useNavigate();
  const [action, setAction] = useState('Sign Up');
  const { register, handleSubmit, unregister, reset } = useForm();

  async function handleSignUp(data) {
    console.log('Sign Up data:', data);
    reset();
  }

  async function handleLogin(data) {
    unregister('username');
    console.log('Login data:', data);
    navigate('/');
    reset();
  }

  return (
    <div className="row">
      <div className="container col-12 col-sm-8 col-md-5">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === 'Sign Up' && (
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input
                type="text"
                placeholder="username"
                {...register('username')}
              />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input
              type="email"
              placeholder="e-mail"
              {...register('mail')}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input
              type="password"
              placeholder="password"
              {...register('pass')}
            />
          </div>
         
        </div>
        <div className="submit-container">
          <div
            className={action === 'Login' ? 'submit gray' : 'submit'}
            onClick={action === 'Sign Up' ? handleSubmit(handleSignUp) : () => setAction('Sign Up')}
          >
            Sign Up
          </div>
          <div
            className={action === 'Sign Up' ? 'submit gray' : 'submit'}
            onClick={action === 'Login' ? handleSubmit(handleLogin) : () => setAction('Login')}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSign;
