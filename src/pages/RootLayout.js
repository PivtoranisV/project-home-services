import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
