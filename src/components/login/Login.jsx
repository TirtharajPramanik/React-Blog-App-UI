import React from 'react';
import './login.css';

const Login = () => {
  return (
    <form className="login">
      <div className="username">
        <label htmlFor="username-in" className="username-label">
          username
        </label>
        <input
          type="text"
          className="username-in"
          name="username-in"
          placeholder="Username"
        />
      </div>
      <div className="email">
        <label htmlFor="email-in" className="email-label">
          email<span style={{ color: 'red', fontSize: '2rem' }}>*</span>
        </label>
        <input
          type="text"
          className="email-in"
          name="email-in"
          placeholder="Email"
        />
      </div>
      <div className="password">
        <label htmlFor="password-in" className="password-label">
          password<span style={{ color: 'red', fontSize: '2rem' }}>*</span>
        </label>
        <input
          type="text"
          className="password-in"
          name="password-in"
          placeholder="password"
        />
        <span
          style={{
            margin: '2em',
            backgroundColor: 'var(--bg-dark-col-var)',
            color: 'var(--bg-light-col)',
          }}
        >
          min 8 char
        </span>
      </div>
      <div className="login-btns">
        <input className="login-btn" type="button" value="Login" />
        <input className="signup-btn" type="button" value="Signup" />
      </div>
    </form>
  );
};

export default Login;
