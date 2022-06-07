import React from 'react';
import Header from '../Header';
import Container from '../Container/indet';
interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header />
      <Container>
        { children }
      </Container>
    </div>
  )
};

export default Layout;