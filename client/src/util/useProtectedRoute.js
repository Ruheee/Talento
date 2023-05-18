import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function useProtectedRoute(route) {
  const { isAuthenticated } = useAuth0();
  
  if (isAuthenticated) {
    return route;
  } else {
    return <Navigate to="/" replace />;
  }
}
