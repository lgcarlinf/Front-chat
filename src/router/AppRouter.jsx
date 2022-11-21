import React, { useEffect } from "react";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Loader from "../components/Loader";
import ChatPage from "../pages/ChatPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const { auth, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (auth.checking) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isAuthenticated={auth.logged} />}>
          <Route path="/" element={<ChatPage />} />
          <Route path="/*" element={<h1>NOT FOUND</h1>} />
        </Route>
        <Route element={<PublicRoute isAuthenticated={auth.logged} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<h1>NOT FOUND</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
