import React, { useState } from 'react';
import '../Style/calender.css'; // Ensure to import your CSS file

const Calendar = ({setView}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTime,setShowTime] = useState(false)
//   const [btnActive,setBtnActive] = useState(fal)

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // Get the starting day of the month (0: Sunday)
    const days = [];

    // Get the previous month details
    const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    const daysInPreviousMonth = getDaysInMonth(previousMonth.getMonth(), previousMonth.getFullYear());

    // Render the last few days of the previous month
    for (let i = daysInPreviousMonth - startDay + 1; i <= daysInPreviousMonth; i++) {
      days.push(
        <div className="calendar-day previous-month" key={`prev-${i}`} onClick={() => setSelectedDate(i)}>
          {i}
        </div>
      );
    }

    // Render the days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = (startDay + day - 1) % 7; // Calculate the day of the week (0: Sunday, ..., 6: Saturday)

      days.push(
        <div
          className={`calendar-day ${selectedDate === day ? 'selected' : ''} ${dayOfWeek === 0 ? 'sunday' : ''} ${dayOfWeek === 6 ? 'saturday' : ''}`}
          key={day}
          onClick={() => setSelectedDate(day)}
        >
          {day}
        </div>
      );
    }

    // Calculate how many days to show from the next month
    const totalDays = days.length;
    const daysInWeek = 7;
    const remainingDays = daysInWeek - (totalDays % daysInWeek);

    // Render days from the next month
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <div
          className="calendar-day next-month"
          key={`next-${i}`}
          onClick={() => {
            // Optionally handle clicks on next month's days
            setSelectedDate(i); // Optionally set the selected date
          }}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="calendar-overlay">
      <div className="calendar-container">
        <div className="calendar-header">
          {/* <button onClick={handlePreviousMonth}>Previous</button> */}
          <h2>{currentDate.toLocaleString('default', { month: 'long' })}</h2>
          <p>{currentDate.getFullYear()}</p>
          {/* <button onClick={handleNextMonth}>Next</button> */}
        </div>
        <div className="calendar-weekdays">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div className={`calendar-weekday ${day === 'Sun' ? 'sunday' : ''} ${day === 'Sat' ? 'saturday' : ''}`} key={index}>
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-grid">
          {renderDays()}
        </div>
        <div className='Calender-btn-holder'>
            <button className='calender-cancel-btn'onClick={(()=>setView(1))}>Cancel</button>
            <button className='calender-save-btn'onClick={(()=>setView(3))}>Choose time</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
