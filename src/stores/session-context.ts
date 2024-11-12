import { createContext } from "react";

const token = localStorage.getItem("accessToken");

export const SessionContext = createContext({
  isLoggedIn: token ? true : false,
  setIsLoggedIn: (value: boolean) => {},
});
