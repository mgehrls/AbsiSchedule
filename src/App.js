import './style.css'
import StaffGroupedCalendar from './components/StaffGroupedCalendar';
import LocationGroupedCalendar from './components/LocationGroupedCalendar';
import { useState } from 'react';
import BaseCalendar from './components/BaseCalendar';

function App() {

  const [view, setView] = useState("default")

  let calendarDisplay

  switch(view){
    case "default":
      calendarDisplay = <BaseCalendar/>
      break;
    case "staff-grouped-week":
      calendarDisplay = <StaffGroupedCalendar />
      break;
    case "location-grouped-week":
      calendarDisplay = <LocationGroupedCalendar />
      break;
    default:
      calendarDisplay = <BaseCalendar/>
  }

  return (
    <div className="App">
      <header>
        <h1 className="page-title">ABSI Schedule</h1>
        <div className='control-panel'>
          <button className='view-btn default-btn' onClick={()=>setView('default')}>Default</button>
          <button className='view-btn staff-btn' onClick={()=>setView("staff-grouped-week")}>Staff</button>
          <button className='view-btn location-btn' onClick={()=>setView("location-grouped-week")}>Location</button>
        </div>
      </header>
      {calendarDisplay}
    </div>
  ); 
}

export default App;
