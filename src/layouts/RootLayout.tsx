import React, { ElementType } from 'react';
import './RootLayout.scss';
import { GenericFooter } from '../components';

export type RootLayoutProps = {
  Header: ElementType;
  children?: React.ReactNode;
};

const RootLayout = ({ Header, children }: RootLayoutProps) => {
  return (
    <div className={`root-layout`}>
      <div className="root-layout__container">
        <header className="root-layout__header">
          <nav className="navigation">
            <Header />
          </nav>
        </header>
        <main className="root-layout__main">{children}</main>
      </div>
      <footer className="root-layout__footer">
        <GenericFooter />
      </footer>
    </div>
  );
};

export default RootLayout;
