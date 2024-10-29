import React, { useState } from 'react';
import "../Style/Home.css"; 
import AddTask from "../Components/AddTask"
import Calendar from '../Components/Calender';
import Time from '../Components/Time';
import TaskPriority from '../Components/Flag';
import StateAddTask from '../Components/StateAddTask';
import Todo from '../Components/Todo';


const Home = () => {
  const [view, setView] = useState(0); // 0 = None, 1 = Add Task, 2 = Calendar
  const [toggle,setToggle] = useState(false)
  return (
    <div className='Home'>
      {/* Static Home Content */}
   
      {
        toggle? (
          <Todo/>
        ):
    <>
       <div className='Home-header'>
        <div className='Home-header-logo'></div>
      </div> 
    <div className='Home-pics'></div>
    <div className='Home-text'>What do you want to do today? <span>Tap + to add your tasks</span></div>
    </>
      }
      
      
      {/* Footer */}
      {
        view === 0 ? (
          <div className='home-footer'>
          <footer>
            <div className='home-footer-icon-holder'>
              <div className='home-footer-icon-container'>
                <div className='home-footer-icon'>
                  <img src="/Homei.svg" alt="" className='Footer-img' />
                </div>
                <p>Home</p>
              </div>
              <div className='home-footer-icon-container' onClick={() => setView(2)}>
                <div className='home-footer-icon'>
                  <img src="/calender.svg" alt="" className='Footer-img' />
                </div>
                <p>Calendar</p>
              </div>
            </div>
            <div className='home-footer-icon-addicon' onClick={() => setView(1)}>
              <div className='plus'></div>
            </div>
            <div className='home-footer-icon-holder'>
              <div className='home-footer-icon-container'>
                <div className='home-footer-icon'>
                  <img src="/focus.svg" alt="" className='Footer-img' />
                </div>
                <p>Focus</p>
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
        ) : 
        (
          <StateAddTask/>
        )
      }
    

      {/* Conditional Components as Overlay */}
      {view === 1 && <AddTask setView={setView} setToggle={setToggle}/>}
      {view === 2 && <Calendar setView={setView} />}
      {view === 3 && <Time setView={setView} />}
      {view === 4 && <TaskPriority setView={setView} />}
    </div>
  );
};

export default Home;
