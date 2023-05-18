import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function useProtectedRoute(route) {
  const [cookies, setCookie] = useCookies(["user"]);
  const isAuthenticatedByCookie = cookies["auth0.spvFR3hekTCoajKUwC1DinYBuimjO18z.is.authenticated"];

  return isAuthenticatedByCookie ? route : <Navigate to="/" replace />;
};
