import React, { useState } from 'react'
import "../Style/addTask.css"
import Calender from './Calender'

const AddTask = ({setView,setToggle}) => {
  const send = ()=>{
    setView(0)
    setToggle(true)
  }
  return (
  
    <div className='AddTask'>
     
    <div className='AddTask-container'>Add Task</div>
    <input type="text"  placeholder='enter task' className='AddTask-input'/>
    <input type="text" placeholder='Description' className='AddTask-input'/>
    <div className='addtask-footer'>
      <div className='addtask-footer-holder'>
      <div className='addtask-footer-icon' onClick={(()=>setView(2))}>
        <img src="/clock.svg" alt="" />
      </div>
      <div className='addtask-footer-icon'>
        <img src="/rect.svg" alt="" />
      </div>
      <div className='addtask-footer-icon'  onClick={(()=>setView(4))}>
        <img src="/flag.svg" alt="" />
      </div>
      </div>
      <div className='addtask-footer-icon'  onClick={send}>
        <img src="/send.svg" alt=""  />
      </div>
    
    </div>
  </div>
 
  )
}

export default AddTask