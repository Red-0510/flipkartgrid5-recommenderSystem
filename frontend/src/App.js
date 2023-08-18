import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React themes
import theme from "assets/theme";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import MyLayout from "myComponents/MyLayout";
import MyDashboard from "myComponents/MyDashboard";
import Profile from "layouts/profile";
import SingleProduct from "myComponents/SingleProduct";
import ProtectedRoutes from "myComponents/ProtectedRoutes";
import MyCart from "myComponents/MyCart";
import MySignUp from "myComponents/MySignUp";
import MySignIn from "myComponents/MySignIn";
import { store } from "redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();


  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <Routes>
          <Route element={<MyLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<MyDashboard />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<MyCart />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="/signin" element={<MySignIn />} key="signin" />
          <Route path="/signup" element={<MySignUp />} key="signup" />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
