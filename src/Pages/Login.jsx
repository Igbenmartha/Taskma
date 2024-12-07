import React, { useState } from 'react';
import "../Style/Login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { PacmanLoader } from 'react-spinners';

const Login = () => {
  const navigate = useNavigate();
  const [seePassword, setseePassword] = useState(false);

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);


  const handleSignIn = async () => {
    const data = { email, password }
    try {
      setloading(true)
      const response = await axios.post("https://taskmaserver.onrender.com/api/v1/user/signin", data)
      console.log(response)
      Swal.fire({
        title: 'Successful!',
        text: response?.data?.message,
        icon: 'success',
      });
      setTimeout(() => {
        navigate("/home")
      }, 3000);
    } catch (error) {
      console.error(error)
      // seterror(error?.data?.message)
      // seterror(error?.response?.data?.message)
      Swal.fire({
        title: 'Failed!',
        text: error?.code == "ERR_NETWORK" ? error?.message : error?.response?.data?.message || 'An unexpected error occurred.',
        icon: 'error',
      });
      console.log(error?.data?.message)
    } finally {
      setloading(false)
    }
  }
  return (
    <div className='Login'>
      <div className='Welcome-header'>
        <button className='Welcome-header-icon' onClick={(() => navigate('/welcome'))}></button>
        <div className='Welcome-header-logo'></div>
      </div>
      <div className='Login-container'>
        <div className='login-header'>Login</div>

      </div>
      <div className='Login-Input-Holder'>
        <div className='login-input-container'>
          <div className='input-icon'>
            <img src="../../public/mage_email.png" alt="" />

          </div>
          <input type="email" onChange={(e) => setemail(e.target.value)} placeholder='Email Address' className='Email-input' />
        </div>
        <div className='login-input-container'>
          <div className='input-icon'>
            <img src="../../public/Vector.png" alt="Vector" />
          </div>
          <input type={seePassword ? "text": "password"} onChange={(e) => setpassword(e.target.value)} placeholder='Password' className='Password-input' />
          <div className='input-iconp'>
            <img src="../../public/Vector1.png" alt="Vector"
            onClick={()=> setseePassword(!seePassword)}
            />
          </div>
        </div>
        {
          error ?
            <div style={{
              color: "#e71e1e", background: "#d2cccc",
              marginBottom: "8px", padding: "5px", fontFamily: "Poppins", width: "max-content"
            }}>

              {error}
            </div>
            : null
        }
      </div>
      <div className='Login-form'>
        <div className='forms'>
          <p className='forgot' onClick={(() => navigate('/reset-password'))}>Forget password?</p>
        </div>
        <button className='Login-Btn' onClick={handleSignIn}>
          {
            loading ?
              <PacmanLoader color="#ece6e6" size={17} />
              : "Login"
          }</button>
      </div>
      <div className='Login-footer'>Don’t have an account? <span onClick={(() => navigate("/sign-up"))}>Sign Up</span></div>

    </div>
  )
}

export default Login