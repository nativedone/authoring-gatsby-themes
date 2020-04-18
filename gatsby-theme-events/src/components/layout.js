import React from 'react';
import { Container } from 'theme-ui';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/use-site-metadata';

const Layout = ({ children }) => {
  const meta = useSiteMetadata();

  return (
    <>
      <header>
        <Link to={meta.basePath}>{meta.title}</Link>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
