import React from 'react';
import AppNavbar from '../../shared/AppNavbar';
import Container from '../Container/indet';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <AppNavbar />
      </Container>
    </header>
  )
};

export default Header;