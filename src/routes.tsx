import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

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
            element: <div>Dashboard</div>,
          },
          {
            path: "send-letter",
            element: <div>Send Letter</div>,
          },
          {
            path: "letters",
            element: <div>Letters</div>,
          },
        ],
      },
    ],
  },
]);
