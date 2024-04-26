/* eslint-disable no-unused-vars */
// import { useState } from "react";
import "./App.css";
// import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Work from "./pages/Work";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/FooterComponent";
import LoginPage from "./pages/LoginPage";
import SignInPage from "./pages/SignInPage";
import { useEffect, useState } from "react";
import { useAuth } from "./ContextAPI/AuthUpdate";
import Loader from "./components/Loader";

function App() {
  const { handleSetUser, token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setErrorMessage] = useState(null);
  const [success, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (token) {
      fetch("https://simple-blog-api-q1ui.onrender.com/api/v1/auth/user/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          handleSetUser(data.data.user);
          setErrorMessage(data.message);
          setSuccessMessage(data.message);
        })
        .catch((err) => {
          setErrorMessage(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [handleSetUser, token]);

  if (loading) {
    return (
      <div className="">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Sign-in" element={<SignInPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
