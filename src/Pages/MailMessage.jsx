import React from 'react'
import "../Style/mailMessage.css"

const MailMessage = () => {
  return (
    <div className='MailMessage'>
        <div className='Mail-message-header'>
            <div className='Mail-message-logo'></div>
        </div>
        <div className='mail-message-mainDiv'>
        <div className='mail-message-mainDiv-header'>Reset Password</div>
        <div className='mail-message-icon'></div>
        <p>Click on the button below to reset your password.</p>
        <button className='mail-message-btn'>Reset password</button>
        </div>
    </div>
  )
}

export default MailMessage