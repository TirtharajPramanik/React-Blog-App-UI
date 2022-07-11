import React from 'react';
import './home.css';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Posts />
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
