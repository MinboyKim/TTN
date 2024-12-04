import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { SessionProvider } from "./stores/session-provider";

createRoot(document.getElementById("root")!).render(
  <SessionProvider>
    <RouterProvider router={router} />
    <Toaster />
  </SessionProvider>
);
