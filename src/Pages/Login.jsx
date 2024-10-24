import React from 'react'
import "../Style/Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='Login'>
         <div className='Welcome-header'>
        <button className='Welcome-header-icon' onClick={(()=>navigate('/welcome'))}></button>
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
                <input type="email"  placeholder='Email Address' className='Email-input'/>
            </div>
            <div className='login-input-container'>
                <div className='input-icon'>
                    <img src="../../public/Vector.png" alt="Vector" />
                </div>
                <input type="password"  placeholder='Password'  className='Password-input'/>
                <div className='input-iconp'>
                    <img src="../../public/Vector1.png" alt="Vector" />
                </div>
            </div>
            </div>
            <div className='Login-form'>
              <div className='forms'> 
                <p className='forgot' onClick={(()=>navigate('/reset-password'))}>Forget password?</p>
              </div>
              <button className='Login-Btn'>Login</button>
            </div>
            <div className='Login-footer'>Don’t have an account? <span onClick={(()=>navigate("/sign-up"))}>Sign Up</span></div>

    </div>
  )
}

export default Login