import React from "react";

import EditableTimer from "./EditableTimer";

export default function EditableTimerList() {
  return (
    <div id="timers">
       <div classname="timerHeader">
           <h2>Timers</h2>
         </div>

      <EditableTimer />
      <EditableTimer />
    </div>
  );
}
