import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/footer/footer";
import Header from "../../pages/header/header";
const Layout = (props) => {
  <p>
    <Header />
    <p> {props.component}</p>
    <Outlet />
    <Footer />
  </p>;
};
export default Layout;
