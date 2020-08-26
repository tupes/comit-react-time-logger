import React from "react";

import EditableTimer from "./EditableTimer";

export default function EditableTimerList(props) {
  return (
    <div id="timers">
    {props.timers.map(timer=>(
      <EditableTimer 
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
      />
    ))}
     
    </div>
  );
}
