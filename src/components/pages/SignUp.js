import React from 'react';
import '../chat.css';
import { Link } from 'react-router-dom';



export default function SignUp() {
  return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input type="password" placeholder="********" id="password" name="password" />
                <Link
                to='/home'
                className='link-btn'
              >
                s'autentifier
              </Link>
            </form>
            <button className='btns' >Don't have an account? Register here.</button>
        </div>
    )
}



