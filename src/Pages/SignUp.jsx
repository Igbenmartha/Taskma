import React, { useEffect, useState } from 'react';
import "../Style/SignUp.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import Swal from 'sweetalert2';

const SignUp = () => {
  const navigate = useNavigate()
  const [seePassword, setseePassword] = useState(false);
  const [seeConfirmPassword, setseeConfirmPassword] = useState(false);
  
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (password == confirmPassword) {
      seterror(null)
    } else {
      seterror("Passwords do not match")
    }
  }, [confirmPassword])


  const handleSignUp = async () => {
    if (error) {
      seterror("Passwords do not match")
    } else {
      const data = { email, password }
      try {
        setloading(true)
        const response = await axios.post("https://taskmaserver.onrender.com/api/v1/user/signup", data)
        console.log(response)
        Swal.fire({
          title: 'Successful!',
          text: response?.data?.message,
          icon: 'success',
        });
        setTimeout(() => {
          navigate('/sign-in')
        }, 3000);
      } catch (error) {
        console.error(error)
        // seterror(error?.response?.data?.message)
        Swal.fire({
          title: 'Failed!',
          text: error?.code == "ERR_NETWORK" ? error?.message : error?.response?.data?.message || 'An unexpected error occurred.',
          icon: 'error',
        });
        setTimeout(() => {
          seterror(null)
          // navigate('/sign-in')
        }, 10000);
        // console.log(error?.response?.data?.message)
      } finally {
        setloading(false)
      }
    }
  }
  return (
    // MARTHA PLEASE FIX THE PASSWORD EYES TO HAVE AN OPEN EYE TOO
    <div className='SignUp'>
      <div className='Welcome-header'>
        <button className='Welcome-header-icon' onClick={(() => navigate('/welcome'))}></button>
        <div className='Welcome-header-logo'></div>
      </div>
      <div className='SignUp-main'>
        <div className='CreateAccount-text-holder'>Create Acccount</div>
        <div className='Input-Holder'>
          <div className='input-container'>
            <div className='input-icon'>
              <img src="../../public/mage_email.png" alt="" />

            </div>
            <input type="email" onChange={(e) => setemail(e.target.value)} placeholder='Email Address' className='Email-input' />
          </div>
          <div className='input-container'>
            <div className='input-icon'>
              <img src="../../public/Vector.png" alt="Vector" 
              
              />
            </div>
            <input type={seePassword ? "text": "password"} onChange={(e) => setpassword(e.target.value)} placeholder='Password' className='Password-input' />
            <div className='input-iconp'>
              <img src="../../public/Vector1.png" alt="Vector" 
               onClick={()=> setseePassword(!seePassword)}
              />
            </div>
          </div>
          <div className='input-container'>
            <div className='input-icon'>
              <img src="../../public/Vector.png" alt="Vector" 
              
              />
            </div>
            <input type={seeConfirmPassword ? "text": "password"} onChange={(e) => setconfirmPassword(e.target.value)} placeholder=' Confirm Password' className='Password-input' />
            <div className='input-iconp'>
              <img src="../../public/Vector1.png" alt="Vector" 
                onClick={()=> setseeConfirmPassword(!seeConfirmPassword)}
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
      </div>
      <div className='button-container-signup'>

        <button className='create-account-btn' onClick={handleSignUp}>
          {
            loading ?
              <PacmanLoader color="#ece6e6" size={17} />
              : "Sign Up"
          }</button>
      </div>
      <div className='Form'>already have account? <span onClick={() => navigate('/sign-in')}>Login</span></div>
    </div>
  )
}

export default SignUp