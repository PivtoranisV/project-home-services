import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header/Header';

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      {navigation.state === 'loading' && <h1>Loading...</h1>}
      <Outlet />
    </div>
  );
};

export default RootLayout;
