import React from "react";
import Home from "../Home";
import Menu from "../Menu/Menu";
import App from '..

const routes = {
  "/": () => <Home />,
  "/meny": () => <Menu />,
  /* "/contact": () => <Contact /> */
};
export default routes;