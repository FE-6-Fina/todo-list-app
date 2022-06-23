import React from "react";

function Layout(props) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      {/* header */}
      <div className="h-full w-full bg-white dark:bg-black flex flex-col">{props.children}</div>
    </div>
  );
}

export default Layout;
