import { serviceApi } from "data/services/ServiceApi";
import React, { useState, createContext, useEffect } from "react";
import AuthContextData from "../types/Auth";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getStoragedData = () => {
      const storagedToken = localStorage.getItem("@taget:token");
      const user = localStorage.getItem("user");

      if (storagedToken) {
        serviceApi.defaults.headers.common.Authenticate = `Bearer ${storagedToken}`;
        setToken(storagedToken);
      }
      if (user) {
        setUser(JSON.parse(user));
      }
    };
    getStoragedData();
  }, []);

  const signIn = (myToken: string, myUser: Object): void => {
    setToken(myToken);
    serviceApi.defaults.headers.common.Authenticate = `Bearer ${myToken}`;
    localStorage.setItem("user", JSON.stringify(myUser));
    localStorage.setItem("@taget:token", myToken);
  };

  const signOut = () => {
    setToken(null);
    localStorage.removeItem("@taget:token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        signed: token,
        token,
        signIn,
        signOut,
        setToken,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
