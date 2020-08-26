import React, { useState } from "react";
import uuid from "uuid";

import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

export default function TimersDashboard() {
  const [timers, setTimers] = useState([
    {
    title: 'Practice squat',
    project: 'Gym Chores',
    id: uuid.v4(),
    elapsed: 5456099,
    runningSince: Date.now(),
    },
    {
    title: 'Bake squash',
    project: 'Kitchen Chores',
    id: uuid.v4(),
    elapsed: 1273998,
    runningSince: null,
    }
    ]
  )
  const handleCreateFormSubmit = (timer) => {
    createTimer(timer);
  }
  
  const createTimer = (timer) => {
      const newTimer = {
      title: timer.title || 'Timer',
      project: timer.project || 'Project',
      id: uuid.v4(),
      elapsed: 0
      } 
      const updateTimers =  [...timers, newTimer];
      setTimers(updateTimers);
    }

  return (
    <div className='timer-dashboard'>
        <EditableTimerList statetimers={timers}/>
        <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} isOpen={true}/>
    </div>
  )
}
