import React from "react";

import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

export default function TimersDashboard() {

  const state = {
    timers: [
    {
    title: 'Practice squat',
    project: 'Gym Chores',
    id: 1,//uuid.v4(),
    elapsed: 5456099,
    runningSince: Date.now(),
    },
    {
    title: 'Bake squash',
    project: 'Kitchen Chores',
    id: 2, //uuid.v4(),
    elapsed: 1273998,
    runningSince: null,
    },
    ],
    }

  return (
    <div className='timer-dashboard'>
        <EditableTimerList statetimers={state.timers}/>
        <ToggleableTimerForm isOpen={true}/>
    </div>
  );
}
