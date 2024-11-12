import { useSession } from "@/hooks/use-session";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoggedIn } = useSession();

  if (!isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="w-full h-full flex">
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
