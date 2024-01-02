import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import starImage from "../components/star.jpg";

const Header = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 text-white bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${starImage})` }}>
      <div className="bg-gray-800 text-white py-4 px-4 flex items-center justify-around z-10"> 
        <h1 className="text-2xl font-bold">Star-Wars</h1>
        <Navbar />
      </div>
      {window.location.pathname === "/" ? (
        <>
          <h1 className="text-5xl font-bold my-10 text-center">Welcome to the Star-Wars Page</h1>
        </>
      ) : (
          <Outlet />
      )}
      </div>
    </div>
  );
};

export default Header;
