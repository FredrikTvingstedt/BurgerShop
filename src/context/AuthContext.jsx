import React, { createContext, useContext, useState } from "react";
import usersData from "../data/users.json";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext({
  user: null,
  login: (username, password) => {},
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  const login = (username, password) => {
    // Check if the username and password match any user in the usersData array
    const authenticatedUser = usersData.find(
      (user) => user.username === username && user.password === password
    );

    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
