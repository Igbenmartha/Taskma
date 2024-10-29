import React, { useState } from 'react'
import "../Style/Todo.css"

const Todo = () => {
    const [searchQuery, setSearchQuery] = useState("");
const todo =[
    {  text: "Complete my House Chores", 
        time :"8:20am",
        place:"Home",
        flag: "1"


    },
    {  text: "Study for my upcoming exam", 
        time :"4:00pm",
        place:"school",
        flag: "2"


    },
    {  text: "Business meeting with CEO", 
        time :"10:15pm",
        place:"Home",
        flag: "3"


    },
    // {  text: "Business meeting with CEO", 
    //     time :"10:15pm",
    //     place:"Home",
    //     flag: "3"


    // },

]
  return (
    <div className='Todo-container'>
        <div className='Todo-header'></div>
        <div className='search-holder'>
            <div className="search"></div>
            <input
  type="text"
  placeholder="Search for your task..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
        </div>
        <div className='todo-holder'>
            <button>Today
                <div className='btn-down'></div>
            </button>
            {
                todo.map((todo)=>
                    <div className="todo">
                <div className='todo-tick-holder'>
                    <div className='todo-tick'></div>
                </div>
                <div className='todo-main'>

                <div className='todo-header'>{todo.text}</div>
                <div className='todo-footer'>Today at{todo.time}
                    <div className='task-btn-holder'>
                        <div className='task-btn'>
                            <div className='homee'></div>
                         {todo.place}
                        </div>
                    <div className='task-flag-holder'>
                        <div className='todo-flag'></div>
                      {todo.flag}
                    </div>
                    </div>
                </div>
                </div>
            </div>
                )
            }
          
         
        
         
        
        </div>
        <div className='todo-holder-complete'>
            <button className='complete'>Complete
                <div className='btn-down'></div>
            </button>
            <div className="todo">
                <div className='todo-tick-holder'>
                    <div className='todo-tick'></div>
                </div>
                <div className='todo-main'>

                <div className='todo-header'>Prepare Dinner</div>
                <div className='todo-footer'>Today at 8:00pm
                    
                </div>
                </div>
            </div>
         
        
        </div>
    </div>
  )
}

export default Todo