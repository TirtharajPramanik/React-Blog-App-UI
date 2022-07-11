import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <img
        src="https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="Profile Identifier"
        className="dp-img"
      />
      <form className="user-info">
        <div className="username user-info-item">
          <label className="username-label" htmlFor="username-in">
            Username:
          </label>
          <input
            type="text"
            name="username-in"
            className="username-in"
            value="Lorem ipsum dolor"
          />
        </div>
        <div className="email user-info-item">
          <label className="email-label" htmlFor="email-in">
            Email:
          </label>
          <input
            type="email"
            name="email-in"
            className="email-in"
            value="Lorem4320@ipsum.dolor"
          />
        </div>
        <div className="password user-info-item">
          <label className="password-label" htmlFor="password-in">
            Password:
          </label>
          <input
            type="password"
            name="password-in"
            className="password-in"
            value="dolor4320@ipsum"
          />
        </div>
        <input type="submit" className="publish" value="Update" />
      </form>
    </div>
  );
};

export default Profile;
