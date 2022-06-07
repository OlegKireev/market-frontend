import React from 'react';
import AppNavbar from '../../shared/AppNavbar';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <AppNavbar />
      { children }
    </div>
  )
};

export default Layout;