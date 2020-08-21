import React from "react";

import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

export default function TimersDashboard() {
  return (
    <div>
      <div>
        <EditableTimerList />
        <ToggleableTimerForm />
      </div>
    </div>
  );
}
