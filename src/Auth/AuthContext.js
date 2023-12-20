import { createContext, useContext, useEffect, useState } from "react";
import { checkAuth } from "../apis/usersAPI";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  //Make request using query
  const { isError, isLoading, data, isSuccess } = useQuery({
    queryFn: checkAuth,
    queryKey: ["checkAuth"],
  });
  //update the authenticated user
  useEffect(() => {
    console.log(data);
    if (isSuccess) setisAuthenticated(data);
  }, [data, isSuccess]);
  //Update the user auth after login
  const login = () => {
    setisAuthenticated(true);
  };
  const logout = () => {
    setisAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isError, isLoading, isSuccess, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
