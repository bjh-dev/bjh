import * as React from "react";
type TypeChildren = {
  children: Object;
};
const Layout = ({ children }: TypeChildren) => {
  return (
    <div className="container">{children}</div>
  )
};

export default Layout;
