import Login from '../components/LogInBtn'
import '../styles/LogInView.scss'
import '../styles/index.scss';
 



export default function LogIn() {

  return (
    <section className='login-background'>
      <p>Login Details</p>
      <input type="text" placeholder='Username, email or phone number'/>
      <input type="text" placeholder='Password'/>
      <p>Forgot Password?</p>
      <button>Login</button>
      <p>Sign up</p>
        <div>
          <img src="" alt="line" />
          <p>or Sign up with</p>
          <img src="" alt="line" />
        </div>
        <div>
          <Login />
        </div>
      
    </section>
    
  );
}