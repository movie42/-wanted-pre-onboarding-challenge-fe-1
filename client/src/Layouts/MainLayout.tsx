import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/Components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
