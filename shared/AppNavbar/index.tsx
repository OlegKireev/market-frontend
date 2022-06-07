import React from 'react';
import Navbar from '../../components/Navbar';
import { ILink } from '../../types/ILink';

const links: ILink[] = [{
  title: 'Home',
  href: '/',
  id: 'home'
}, {
  title: 'Catalog',
  href: '/catalog',
  id: 'catalog'
}];

const AppNavbar = () => {
  return <Navbar links={links} />
};

export default AppNavbar;