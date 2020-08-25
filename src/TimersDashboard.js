import React, {useState} from "react";

import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import './index.css';

export default function TimersDashboard() {
  const [timers,setTimers]=useState([
    {
      id:Math.random(),
      title: "Practice squat",
      project: "Gym Chores",
      elapsed: 5456099,
      runningSince: Date.now(),
      },
      {
      id:Math.random(),
      title: "Bake squash",
      project: "Kitchen Chores",
      elapsed: 1273998,
      runningSince: null,
      }
    ]);
    const onFormSubmit=(timer)=>{
      const updatedTimer=[...timers,timer]
      setTimers(updatedTimer);
    }
  
  
  return (
    <div className="container">
      <h2>Timers</h2>
      <div className="timerdashboard">
        <EditableTimerList timers={timers}/>
        <ToggleableTimerForm onFormSubmit={onFormSubmit}/>
      </div>
    </div>
  );
}
