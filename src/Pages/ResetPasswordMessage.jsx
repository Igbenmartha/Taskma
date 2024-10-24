import React from 'react'
import "../Style/ResetMessage.css"

const ResetPasswordMessage = () => {
  return (
    <div className='ResetPasswordMessage'>
        <div className='Reset-password-message-header'>
            Reset Password
            <h4>X</h4>
        </div>
        <div className='Reset-password-icon'></div>
        <div className='Reset-password-message'>A reset password link has been sent to your e-mail address.</div>
        <div className='Reset-password-click'>Click on the link on your mail to reset your password.</div>
    </div>
  )
}

export default ResetPasswordMessage