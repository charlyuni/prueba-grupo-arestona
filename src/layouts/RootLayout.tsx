import React, { ElementType } from 'react';
import { Outlet } from 'react-router-dom';
import './RootLayout.scss';
import { GenericFooter } from '../components';

export type RootLayoutProps = {
  Header: ElementType;
};

const RootLayout = ({ Header }: RootLayoutProps) => {
  return (
    <div className={`root-layout`}>
      <div className="root-layout__container">
        <header className="root-layout__header">
          <nav className="navigation">
            <Header />
          </nav>
        </header>
        <main className="root-layout__main">
          <Outlet />
        </main>
      </div>
      <footer className="root-layout__footer">
        <GenericFooter />
      </footer>
    </div>
  );
};

export default RootLayout;
