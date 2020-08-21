import React from "react";

import EditableTimer from "./EditableTimer";

export default function EditableTimerList() {
  return (
    <div id="timers">
      <EditableTimer />
      <EditableTimer />
    </div>
  );
}
