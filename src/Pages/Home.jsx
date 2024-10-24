import React, { useState } from 'react'
import "../Style/Home.css"
import AddTask from './AddTask'

const Home = () => {
    const [show,setShow] = useState(false)
  return (
    <div className='Home'>
        <div className='Home-header'>
        <div className='Home-header-logo'></div>

        </div> 
        <div className='Home-pics'></div>
        <div className='Home-text'>What do you want to do today? <span>Tap + to add your tasks</span></div>
        <div className='home-footer'>
            <footer>
                <div className='home-footer-icon-holder'>
                    <div className='home-footer-icon-container'>
                        <div className='home-footer-icon'>
                            <img src="/Homei.svg" alt="" className='Footer-img' />
                        </div>
                        <p>Home</p>
                    </div>
                    <div className='home-footer-icon-container'>
                        <div className='home-footer-icon'>
                            <img src="/calender.svg" alt="" className='Footer-img' />
                        </div>
                        <p>Calender</p>
                    </div>
                </div>
                <div className='home-footer-icon-addicon' onClick={(()=>setShow(true))}>
                  <div className='plus'></div>
                </div>
              
                <div className='home-footer-icon-holder'>
                <div className='home-footer-icon-container'>
                        <div className='home-footer-icon'>
                            <img src="/focus.svg" alt="" className='Footer-img' />
                        </div>
                        <p>Focuse</p>
                    </div>
                <div className='home-footer-icon-container'>
                        <div className='home-footer-icon'>
                            <img src="/profile.svg" alt="" className='Footer-img' />
                        </div>
                        <p>Profile</p>
                    </div>
                </div>

            </footer>
        </div>
        {
                    show? <AddTask/> : null
                }
    </div>
  )
}

export default Home