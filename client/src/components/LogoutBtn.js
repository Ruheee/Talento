import { useAuth0 } from "@auth0/auth0-react";
import '../components/Navbar/Navbar.css';


const Logout = () => {
  const { logout, user } = useAuth0();

  return (
    <button className="login-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default Logout;