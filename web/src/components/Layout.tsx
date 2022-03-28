import * as React from 'react';
import '@/assets/styles/global.css';
import PrimaryNav from '@/components/PrimaryNav';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-200  font-serif">
      <PrimaryNav />
      {children}
    </div>
  );
}

export default Layout;
