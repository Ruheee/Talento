import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
      <div className="social--logo"> 
        <img src="Google.png" alt="" onClick={() => loginWithRedirect()}/>
        <img src="Facebook.png" alt="" onClick={() => loginWithRedirect()}/>
        <img src="Apple.png" alt="" onClick={() => loginWithRedirect()}/>
      </div>
  )
}

export default LoginButton;
