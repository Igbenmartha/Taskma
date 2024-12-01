import React from 'react'
import "../Style/SignUp.css"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState();
    const [activeItem, setActiveItem] = useState(0);
    const handleSignUp = () => {

    }
  return (
    <div className='SignUp'>
         <div className='Welcome-header'>
        <button className='Welcome-header-icon' onClick={(()=>navigate('/welcome'))}></button>
        <div className='Welcome-header-logo'></div>
      </div>
      <div className='SignUp-main'>
        <div className='CreateAccount-text-holder'>Create Acccount</div>
        <div className='Input-Holder'>
            <div className='input-container'>
                <div className='input-icon'>
                <img src="../../public/mage_email.png" alt="" />

                </div>
                <input type="email" onChange={(e)=> setemail(e.target.value)} placeholder='Email Address' className='Email-input'/>
            </div>
            <div className='input-container'>
                <div className='input-icon'>
                    <img src="../../public/Vector.png" alt="Vector" />
                </div>
                <input type="password"  placeholder='Password'  className='Password-input'/>
                <div className='input-iconp'>
                    <img src="../../public/Vector1.png" alt="Vector" />
                </div>
            </div>
            <div className='input-container'>
                <div className='input-icon'>
                    <img src="../../public/Vector.png" alt="Vector" />
                </div>
                <input type="password"  placeholder=' Confirm Password'  className='Password-input'/>
                <div className='input-iconp'>
                    <img src="../../public/Vector1.png" alt="Vector" />
                </div>
            </div>
        </div>
      </div>
      <div className='button-container-signup'>

        <button className='create-account-btn'>Sign Up</button>
      </div>
        <div className='Form'>already have account? <span onClick={(()=>navigate('/sign-in'))}>Login</span></div>
    </div>
  )
}

export default SignUp