import React from 'react';
import './postcard.css';
import { Link } from 'react-router-dom';
import Post from '../post/Post';

const PostCard = () => {
  return (
    <div className="post-card">
      <Link className="page-link" to="/post">
        <img
          className="post-card-img"
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="post attachment"
        />
        <p className="post-card-text">
          <h3 className="post-card-title">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
          animi laborum labore deleniti deserunt et id aspernatur tenetur
          assumenda, natus est praesentium eos. Amet, eligendi. Dolores,
          necessitatibus! Ullam nostrum deleniti cum maxime reiciendis veritatis
          consequuntur corporis repellendus magni ratione aliquid vero vitae
          placeat, quos, quidem unde aliquam culpa totam?
        </p>
      </Link>
    </div>
  );
};

export default PostCard;
