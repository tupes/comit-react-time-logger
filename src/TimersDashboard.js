import React,{useState} from "react";

import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { v4 as uuidv4 } from 'uuid';
export default function TimersDashboard() {
  const [timers, setTimers] = useState([
    {
      title: 'Practice squat', project: 'Gym Chores', id: uuidv4(),
      elapsed: 5456099, runningSince: Date.now(),
    }, 
    {
      title: 'Bake squash', project: 'Kitchen Chores', id: uuidv4(),
      elapsed: 1273998, runningSince: null,
    }, 
  ])
  return (
    <div>
      <div className='content'>
      <h1>Timers</h1>
        <EditableTimerList timers={timers}/>
        <ToggleableTimerForm />
      </div>
    </div>
  );
}
