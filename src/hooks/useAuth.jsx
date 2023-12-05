/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userInfos, setUserInfos] = useState(null);

  function authenticateUser({ user, token }) {
    setUserInfos(user);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    localStorage.setItem("@food_explorer:user", JSON.stringify(user));
    localStorage.setItem("@food_explorer:token", token);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@food_explorer:user"));
    const token = localStorage.getItem("@food_explorer:token");

    if (user && token) {
      setUserInfos(user);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userInfos, authenticateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
