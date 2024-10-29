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
                            {
                                selectedBox?
                                <div className='flag-icons'></div>:

                          <div className='flag-icon'></div>
                            }
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
