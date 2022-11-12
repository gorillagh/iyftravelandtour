import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbars/Navbar";

import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  return user && user.token ? (
    <div>
      {/* <Navbar /> */}
      {children}
      </div>
  ) : (
    <LoadingToRedirect message="You are not logged in." />
  );
};

export default UserRoute;
