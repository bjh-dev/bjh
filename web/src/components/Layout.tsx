import * as React from 'react';
import '../assets/styles/global.css';

type TypeChildren = {
  children: Object
}
const Layout = ({ children }: TypeChildren) => {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-200  font-serif">
      {children}
    </div>
  );
};

export default Layout
