import React from "react";

import EditableTimer from "./EditableTimer";

export default function EditableTimerList({timers,onFormSubmit}) {
  
  return (
    <div id="timers">
      {timers.map((timer)=>(
        <EditableTimer
        onFormSubmit={onFormSubmit}
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        ></EditableTimer>
      )
      )}
   </div>
  );
}
