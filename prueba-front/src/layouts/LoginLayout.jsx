import { Outlet } from "react-router-dom";

import React from "react";

export const LoginLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
