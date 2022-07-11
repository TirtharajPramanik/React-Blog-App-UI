import React from 'react';
import './editpost.css';
import { BsPlusSquareFill } from 'react-icons/bs';

const EditPost = () => {
  return (
    <form className="edit-post">
      <img
        className="edit-img"
        src="https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="background landscape"
      />
      <div className="first-line">
        <div className="img-picker">
          <label htmlFor="img-picker-in" className="img-picker-label">
            <BsPlusSquareFill className="img-picker-btn" size={30} />
          </label>
          <input type="file" name="img-picker-in" className="img-picker-in" />
        </div>
        <div className="title">
          <input
            type="text"
            name="title-in"
            className="title-in"
            placeholder="Pick a Title..."
          />
        </div>
        <input type="submit" className="publish" value="Publish" />
      </div>
      <div className="text">
        <textarea
          name="text-in"
          className="text-in"
          placeholder="Write a Paragraph..."
        ></textarea>
      </div>
    </form>
  );
};

export default EditPost;
