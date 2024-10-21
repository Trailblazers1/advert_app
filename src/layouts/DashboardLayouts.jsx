import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function DashboardLayouts() {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <div className="w-[30%]">
          <Sidebar />
        </div>
        <div className="w-[70%] pt-32">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayouts;
