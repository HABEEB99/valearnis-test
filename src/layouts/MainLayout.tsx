import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <main className="w-full h-[85vh] py-4 container px-3 md:px-0 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
