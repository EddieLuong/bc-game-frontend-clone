import React from 'react';

import Header from '../Header';
import SideBar from '../SideBar';
import { BodyWrapper, LayoutWrapper, ContainerWrapper } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <SideBar />
      <BodyWrapper>
        <Header />
        <ContainerWrapper>{children}</ContainerWrapper>
      </BodyWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
