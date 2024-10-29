import React, { useState } from 'react'
import "../Style/Time.css"

const Time = ({setView}) => {
  const [hour, setHour] = useState('12');
  const [minute, setMinute] = useState('00');
  const [period, setPeriod] = useState('AM');


  const handleSave = () => {
    const selectedTime = `${hour}:${minute} ${period}`;
    alert(`Selected Time: ${selectedTime}`);
  };

  const generateOptions = (range) => {
    return Array.from({ length: range }, (_, i) =>
      i < 10 ? `0${i}` : `${i}`
    );
  };

  const hours = generateOptions(12).slice(1);
  const minutes = generateOptions(60);
  const periods = ['AM', 'PM'];

  return (
    <div className='Time-overLay'>
      <div className='Time'>
        <div className="Time-Header">Choose Time</div>
        <div className='time-picker-controls'>
          <div className='time-picker'>
        
        {hours.map((h) => (
          <div
            key={h}
            className={`time-option ${hour === h ? 'selected' : ''}`}
            onClick={() => setHour(h)}
          >
            {h}
          </div>
        ))}
          </div>
          <div className='time-picker'>
        
          {minutes.map((m) => (
          <div
            key={m}
            className={`time-option ${minute === m ? 'selected' : ''}`}
            onClick={() => setMinute(m)}
          >
            {m}
          </div>
        ))}
          </div>
          <div className='time-picker'>
        
          {periods.map((p) => (
          <div
            key={p}
            className={`time-option-period ${period === p ? 'selected' : ''}`}
            onClick={() => setPeriod(p)}
          >
            {p}
          </div>
        ))}
        </div>
        </div>
        <div className='Calender-btn-holder'>
            <button className='calender-cancel-btn'onClick={(()=>setView(2))}>Cancel</button>
            <button className='calender-save-btn'onClick={(()=>setView(1))}>save</button>
        </div>
      </div>
      
    </div>
  )
}

export default Time