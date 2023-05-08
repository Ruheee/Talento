import Login from "../components/LogInBtn";
import "../styles/LogInView.scss";
import "../styles/index.scss";



export default function LogIn() {
  return (
    <section className="login-background">
      <p>Login</p>
      <input type="text" placeholder="Username, email or phone number" />
      <input type="text" placeholder="Password" />
      <span>Forgot Password?</span>
      <button className="login---btn">Login</button>
      <span>Sign up</span>
      <div className="signUpWithGoogle">
        <img src="left_line.png" alt="line" />
        <span>or Sign up with</span>
        <img src="right_line.png" alt="line" />
      </div>
      <div>
        <Login />
      </div>
      <img src="Vector.png" alt="" />
    </section>
  );
}