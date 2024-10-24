import React from 'react'
import "../Style/UpdatePassword.css"
import { useNavigate } from 'react-router-dom'

const UpdatePassword = () => {
    const navigate = useNavigate()
  return (
    <div className='UpdatePassword'>
        <div className='UpdatePassword-header'>
            <div className='UpdatePassword-header-logo'></div>
        </div>
        <div className='UpdatePassword-headerText'>Update Password</div>
        <div className='UpdatePassword-mainDiv'>
            <div className='UpdatePassword-inputHolder'>
                <h5>New password</h5>
                <div className='UpdatePassword-inputDiv'>
                    
                <input type="password"  placeholder='enter new password'/>
                <div className='Password-not-show'>
            <img src="/PasswordNoshow.svg" alt="" />
        </div>
                </div>
            </div>
            <div className='UpdatePassword-inputHolder'>
                <h5>Confirm new password</h5>
                <div className='UpdatePassword-inputDiv'>
                    
                <input type="password"  placeholder='enter confirm new password'/>
                <div className='Password-not-show'>
            <img src="/Password-show.svg" alt="" />
        </div>
                </div>
            </div>
        </div>
        <button className='UpdatePassword-btn' onClick={(()=>navigate('/sign-in'))}>Update Password</button>
        

    </div>
  )
}

export default UpdatePassword