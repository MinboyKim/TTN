import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SendLetters from "./pages/SendLetters";
import Letters from "./pages/Letters";
import LetterDetail from "./pages/LetterDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Outlet />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/app",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            path: "/app",
            element: <Navigate to="/app/dashboard" />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "send-letter",
            element: <SendLetters />,
          },
          {
            path: "letters",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Letters />,
              },
              {
                path: ":id",
                element: <LetterDetail />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
