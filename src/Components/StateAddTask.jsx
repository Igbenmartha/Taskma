import React from 'react'
import "../Style/stateaddtask.css"

const StateAddTask = () => {
  return (
    <div className='StateAddTask'>
      <p>Add Task</p>
      <h5>Complete my house chores</h5>
      <h5>Do the dishes</h5>
      <div className='state-addtask-footer'>
      <div className='state-addtask-footer-holder'>
      <div className='state-addtask-footer-icon' >
        <img src="/state-clock.svg" alt="" />
      </div>
      <div className='addtask-footer-icon'>
        <img src="/state-rect.svg" alt="" />
      </div>
      <div className='addtask-footer-icon' >
        <img src="/flagS.svg" alt="" />
      </div>
      </div>
      <div className='addtask-footer-icon'>
        <img src="/state-send.svg" alt="" />
      </div>
    
    </div>
    </div>
  )
}

export default StateAddTask