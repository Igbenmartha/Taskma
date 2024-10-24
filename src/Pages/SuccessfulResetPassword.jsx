import React from 'react'
import "../Style/PasswordResetSuccessful.css"
import { useNavigate } from 'react-router-dom'

const SuccessfulResetPassword = () => {
    const naviagate = useNavigate()
  return (
    <div className='SuccessfulResetPassword'>
          <div className='Reset-password-message-header'>
            Successful.
            <h4>X</h4>
        </div>
        <div className='Successful-message-icon'></div>
        <div className='Successful-message'>Congratulations!
            <span>you have successfully reset your password.</span>
        </div>
        <button className='Succesful-message-btn' onClick={(()=>naviagate('/login'))}>Back to Login</button>
    </div>
    
  )
}

export default SuccessfulResetPassword