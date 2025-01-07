import React from "react";
import { Outlet } from "react-router-dom"; // Corrected import from react-router-dom
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0">
          <Outlet /> {/* This renders the nested route components like Feateres, Registration, Login */}
        </div>
      </div>
      <Footer />
    </>
  );
}
