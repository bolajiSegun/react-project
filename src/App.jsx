/* eslint-disable no-unused-vars */
import "./App.css";
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

  return (
    <main className="min-h-screen max-w-[100rem] mx-auto">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Sign-in" element={<SignInPage />} />
          <Route path="/Sign-up" element={<LoginPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </main>
  );
}

export default App;
