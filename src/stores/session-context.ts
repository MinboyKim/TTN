import { createContext } from "react";

const token = localStorage.getItem("accessToken");

export const SessionContext = createContext({
  isLoggedIn: token ? true : false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsLoggedIn: (_: boolean) => {},
});
