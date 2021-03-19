import React, {useState,createContext} from "react";

import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { v4 as uuidv4 } from 'uuid';

import './index.css';
export const timerContext=createContext();
export default function TimersDashboard() {
  const [timers,setTimers]=useState([
    {
      id:uuidv4(),
      title: "Practice squat",
      project: "Gym Chores",
      elapsed: 5456099,
      runningSince: Date.now(),
      },
      {
      id:uuidv4(),
      title: "Bake squash",
      project: "Kitchen Chores",
      elapsed: 1273998,
      runningSince: null,
      }
    ]);
    const onFormSubmit=(timer)=>{
      
      const updatedTimer=[...timers,timer]
      console.log(updatedTimer);
      setTimers(updatedTimer);
    }
  const handleEditFormSubmit=(newTimer)=>{
    const updatedTimer=timers.map((timer)=>
    {
      if(timer.id===newTimer.id)
      {
       const updatedNewTimer={...timer,title:newTimer.title,project:newTimer.project};
        return updatedNewTimer;
       
      }
      else
      {
      return timer;
      }
    }
    );
    setTimers(updatedTimer);
  }
  const handleTrashClick=(id)=>{
    const updatedTimer=timers.filter((timer)=>timer.id!=id);
    setTimers(updatedTimer);
  }
  
  return (
    <div className="container">
      <h2>Timers</h2>
      <div className="timerdashboard">
        <timerContext.Provider value={{handleTrashClick}}>
        <EditableTimerList 
        timers={timers}
        onFormSubmit={handleEditFormSubmit}
        
        />
        </timerContext.Provider>
        <ToggleableTimerForm onFormSubmit={onFormSubmit}/>
      </div>
    </div>
  );
}
