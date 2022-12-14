import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';

import { Container, Nav, Head, Section } from './styled';
import Navigation from './Navigation';
import Header from './Header';

const Layout: FC = () => {
  return (
    <Container>
      <Nav>
        <Navigation />
      </Nav>

      <Head>
        <Header />
      </Head>

      <Section>
        <Outlet />
      </Section>
    </Container>
  );
};

export default Layout;
