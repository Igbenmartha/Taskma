import React, { useState } from 'react';
import "../Style/flag.css";

const TaskPriority = ({setView}) => {
    const [selectedBox, setSelectedBox] = useState(null);

    const handleSelectBox = (index) => {
        setSelectedBox(index);
    };

    return (
        <div className='Flag-overlay'>
            <div className='Flag'>
                <div className="Flag-header">
                    Task Priority
                </div>
                <div className='Flag-box-holder'>
                    {[...Array(10).keys()].map((num) => (
                        <div
                            key={num}
                            className={`Flag-box ${selectedBox === num ? 'selected' : ''}`}
                            onClick={() => handleSelectBox(num)}
                        >
                            <svg
                                className="flag-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor" // Use currentColor to inherit from parent
                                width="24px"
                                height="24px"
                            >
                                <path d="M5.14999 22.75C4.73999 22.75 4.39999 22.41 4.39999 22V2C4.39999 1.59 4.73999 1.25 5.14999 1.25C5.55999 1.25 5.89999 1.59 5.89999 2V22C5.89999 22.41 5.55999 22.75 5.14999 22.75Z" fill="white" fill-opacity="0.87" />
  <path d="M16.35 16.75H5.14999C4.73999 16.75 4.39999 16.41 4.39999 16C4.39999 15.59 4.73999 15.25 5.14999 15.25H16.35C17.44 15.25 17.95 14.96 18.05 14.71C18.15 14.46 18 13.9 17.22 13.13L16.02 11.93C15.53 11.5 15.23 10.85 15.2 10.13C15.17 9.37 15.47 8.62 16.02 8.07L17.22 6.87C17.96 6.13 18.19 5.53 18.08 5.27C17.97 5.01 17.4 4.75 16.35 4.75H5.14999C4.72999 4.75 4.39999 4.41 4.39999 4C4.39999 3.59 4.73999 3.25 5.14999 3.25H16.35C18.54 3.25 19.24 4.16 19.47 4.7C19.69 5.24 19.84 6.38 18.28 7.94L17.08 9.14C16.83 9.39 16.69 9.74 16.7 10.09C16.71 10.39 16.83 10.66 17.04 10.85L18.28 12.08C19.81 13.61 19.66 14.75 19.44 15.3C19.21 15.83 18.5 16.75 16.35 16.75Z" />

                            </svg>
                            {num + 1}
                        </div>
                    ))}
                </div>
                <div className='flag-btn-holder'>
            <button className='calender-cancel-btn'onClick={(()=>setView(2))}>Cancel</button>
            <button className='calender-save-btn'onClick={(()=>setView(1))}>save</button>
                </div>
            </div>
        </div>
    );
};

export default TaskPriority;