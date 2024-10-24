import React, { useEffect, useState } from 'react'
import "../Style/ManageTask.css"

import { useNavigate } from 'react-router-dom';


const ManageTask = () => {
  const [activeItem, setActiveItem] = useState(0);
   const navigate = useNavigate()

   const items =[
    {
      image:"/Frame1.png",
      title: "Manage your tasks",
      text: "You can easily manage all of your daily tasks on Taskma for free."
    },
    {
      image:"/Frame1.png",
      title: "Create daily outine",
      text: "At Taskma you can create your personalized routine to stay productive."
    },
    {
      image:"/Frame1.png",
      title: "Organize  your tasks",
      text: "You can organize your daily task by adding your tasks into seperate categories."
    },
   ]
   useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);
  return (
    <div className='ManageTask'>
        <div className='ManageTask-container'>
            <div className='ManageTask-imageHolder'>
                <img src={items[activeItem].image} alt="" className='ManageTask-image'/>
            </div>
            <div className='ManageTask-header'>{items[activeItem].title}</div>
            <div className='MangeTask-text'>{items[activeItem].text}</div>
       <div className='progress-bar'>
       <div className={`stroke ${activeItem === 0 ? "active" : ""}`}></div>
        <div className={`stroke ${activeItem === 1 ? "active" : ""}`}></div>
        <div className={`stroke ${activeItem === 2 ? "active" : ""}`}></div>
       </div>
        </div>
        <button className='ManageTask-btn' onClick={(()=> navigate('/welcome'))}>Get Started</button>
    </div>
  )
}

export default ManageTask