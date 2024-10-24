import React from 'react'
import "../Style/ResetPassword.css"
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
const navigate = useNavigate()
  return (
    <div className='Reset-Password'> 
       <div className='Welcome-header'>
        <button className='Welcome-header-icon' onClick={(()=>navigate('/welcome'))}></button>
        <div className='Welcome-header-logo'></div>
      </div>
      <div className='Reset-Password-Header'>Reset Password</div>
      <div className='Reset-password-container'>
        <div className='Resetpassword-text'>Please enter the email address associated with this account</div>
        <input type='email' placeholder='Enter the email address' className='Resetpassword-input'/>
      </div>
      <div className='Resetpassword-holder'>
        <button className='ResetBtn' onClick={(()=>navigate('/reset-password-message'))}>Reset Password</button>
      </div>
      <div className='resetpasswood-footer'>Remember password? <span onClick={(()=>navigate('/sign-in'))}>Login</span></div>
      </div>
  )
}

export default ResetPassword