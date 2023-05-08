import Login from '../components/LogInBtn'
import '../styles/SignUp.scss'
import '../styles/index.scss';
 



export default function SignUp() {
  return (
    <section className='register-background'>
      <p>Register</p> 
      <input type="text" placeholder='Username, email or phone number'/>
      <input type="text" placeholder='Password'/>
      <input type="text" placeholder='Username, email or phone number'/>
      <input type="text" placeholder='Password'/>
      <button className='register---btn'>Register</button>
        <div className='registerUpWithGoogle'>
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