import { createContext, useContext, useState } from "react";
// import { AuthContextValue, User } from "../types/types";

const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
function AuthUpdate({ children }) {
  const getToken = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;

  const getUser = localStorage.getItem("user")
    ? localStorage.getItem("user")
    : null;

  const [token, setToken] = useState(getToken);
  const [user, setUser] = useState(getUser);

  const handleSetToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const handleSetUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
    setUser(null);
  };

  const authContextValue = {
    user,
    token,
    handleSetToken,
    handleSetUser,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthUpdate;

export const useAuth = () => {
  return useContext(AuthContext);
};
