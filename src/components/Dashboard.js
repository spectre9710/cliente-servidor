// src/components/Dashboard.js
import React from 'react';
import Home from '../Home';
import Comments from '../comments/Comments';
import Cart from '../Cart';
import { CartProvider } from 'react-use-cart';

const Dashboard = () => {
  return (
    <>
     <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </>
  );
};

export default Dashboard;
