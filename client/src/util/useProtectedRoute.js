import { useCookies } from "react-cookie";

export default function useProtectedRoute(protectRoute, redirectRoute) {
  const [cookies] = useCookies(["user"]);
  const isAuthenticatedByCookie = cookies["auth0.spvFR3hekTCoajKUwC1DinYBuimjO18z.is.authenticated"];

  return isAuthenticatedByCookie ? protectRoute : redirectRoute;
};
