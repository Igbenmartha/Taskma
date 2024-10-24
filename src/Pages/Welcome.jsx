import React from 'react'
import "../Style/Welcome.css"
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate= useNavigate()
  return (
    <div className='Welcome'>
      <div className='Welcome-header'>
        <button className='Welcome-header-icon' onClick={(()=>navigate('/'))}></button>
        <div className='Welcome-header-logo'></div>
      </div>
      <div className='Welcome-main'>
        <div className='Welcome-main-textHolder'>
        <div className='Welcome-mainText'>Welcome to Taskma</div>
        <div className='Welcome-main-text'>Please login to your account or create new account to continue</div>
        </div>
       
      <div className='Welcome-btnHolder'>
        <button className='Welcome-loginbtn'onClick={(()=>navigate("/sign-in"))}>Login</button>
        <button className='Welcome-createAccountbtn' onClick={(()=>navigate("/sign-up"))}>Create account</button>
      </div>
      </div>
    </div>
  )
}

export default Welcome