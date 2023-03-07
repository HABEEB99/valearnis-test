import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <main className="w-full h-[85vh] container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
