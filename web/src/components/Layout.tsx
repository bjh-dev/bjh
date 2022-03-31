import * as React from 'react';
import '@/assets/styles/global.css';
import PrimaryNav from '@/components/PrimaryNav';

function Layout({ children }) {
  return (
    <div className="dark min-h-screen font-serif">
      <PrimaryNav />
      {children}
    </div>
  );
}

export default Layout;
