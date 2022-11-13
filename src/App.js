import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import UserRoute from "./components/Routes/UserRoute";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import SignupComplete from "./pages/auth/SignupComplete";

import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbars/Navbar";
import { Container } from "@mui/system";
import Footer from "./components/Footers/Footer";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import { currentUser } from "./serverFunctions/auth";
import AdminRoute from "./components/Routes/AdminRoute";
import Account from "./pages/user/Account";
import Profile from "./pages/user/Profile";
import EmailChange from "./pages/user/EmailChange";

import AdminAccount from "./pages/admin/AdminAccount";
import AdminProfile from "./pages/admin/AdminProfile";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#0000d4",
      // main: "#336c4c",
      // dark: "#124a54",
      dark: "#000088",
      main: "#000099",
      // dark: "#495e51",
      contrastText: "#fff",
    },
    secondary: {
      light: "#d4d400",
      main: "#aaaa00",
      dark: "#888800",
      contrastText: "#000",
    },
    error: {
      main: "#ce0018",
      light: "#ff0220",
      dark: "#a50013",
      contrastText: "#fff",
    },
    info: {
      main: "#726f55",
      light: "#8f8b6a",
      dark: "#5b5944",
      contrastText: "#fff",
    },
  },

  // shape: {
  //   borderRadius: 14,
  // },
  typography: {
    htmlFontSize: 16,
    fontFamily: [
      // "Ubuntu",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h5: {
      fontFamily: "Ubuntu",
    },
    h4: {
      fontFamily: "Ubuntu",
    },
    body2: {
      color: "text.secondary",
      fontWeight: "300",
    },
  },
  // mixins: {
  //   toolbar: {
  //     minHeight: ,
  //   },
  // },
});
theme = responsiveFontSizes(theme);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In user", user);
        const idTokenResult = await user.getIdTokenResult();

        currentUser(idTokenResult.token)
          .then((res) => {
            console.log(res);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                email: res.data.email,
                role: res.data.role,
                name: res.data.name,
                token: idTokenResult.token,
                phoneNumber: res.data.phoneNumber ? res.data.phoneNumber : "",
                _id: res.data._id,
              },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <ToastContainer style={{ fontSize: "12px", fontWeight: "bold" }} />
      {/* <Container maxWidth="lg"> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup/complete" element={<SignupComplete />} />

        <Route
          exact
          path="/my/dashboard"
          element={
            <UserRoute>
              <Dashboard />
            </UserRoute>
          }
        />

        <Route
          exact
          path="/my/account"
          element={
            <UserRoute>
              <Account />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/my/profile"
          element={
            <UserRoute>
              <Profile />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/email/change"
          element={
            <UserRoute>
              <EmailChange />
            </UserRoute>
          }
        />

        <Route
          exact
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/account"
          element={
            <AdminRoute>
              <AdminAccount />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/profile"
          element={
            <AdminRoute>
              <AdminProfile />
            </AdminRoute>
          }
        />

        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* </Container> */}
    </ThemeProvider>
  );
};

export default App;
