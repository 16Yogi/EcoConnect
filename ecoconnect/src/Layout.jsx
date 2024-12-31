import React from "react";
import { Outlet } from "react-router";
import Header from "./Component/Header/Header";

export default function Layout() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <Header/>
        <div className="row p-0 m-0">
            <Outlet/>
        </div>
        <div className="container-fluid"></div>
      </div>
    </>
  );
}
