// src/components/Dashboard.js
import React from 'react';
import Home from '../Home';
import Comments from '../comments/Comments';
import Cart from '../Cart';

const Dashboard = () => {
  return (
    <>
      <Home />
      <Cart />
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </>
  );
};

export default Dashboard;
