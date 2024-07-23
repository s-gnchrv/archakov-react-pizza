import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const Root = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{children ?? <Outlet />}</div>
    </div>
  );
};

export default Root;
