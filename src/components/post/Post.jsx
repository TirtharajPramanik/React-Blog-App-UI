import React from 'react';
import './post.css';
import Sidebar from '../sidebar/Sidebar';

const Post = () => {
  return (
    <main className="main">
      <Sidebar />
      <div className="post">
        <img
          className="post-img"
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="post attachment"
        />
        <h3 className="post-title">Lorem ipsum dolor sit amet consectetur.</h3>
        <p className="post-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil
          animi laborum labore deleniti deserunt et id aspernatur tenetur
          assumenda, natus est praesentium eos. Amet, eligendi. Dolores,
          necessitatibus! Ullam nostrum deleniti cum maxime reiciendis veritatis
          consequuntur corporis repellendus magni ratione aliquid vero vitae
          placeat, quos, quidem unde aliquam culpa totam?
        </p>
      </div>
    </main>
  );
};

export default Post;
