import React from 'react';
import PostCard from './PostCard';
import './posts.css';

const Posts = () => {
  return (
    <div className="posts">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Posts;
