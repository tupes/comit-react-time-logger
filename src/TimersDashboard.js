import React from "react";

import "./index.css";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

export default function TimersDashboard() {
  const timer=[
    {
      title:'Mow the lawn',
      project:'House Chores',
      time:90
    },
  ];
  return (
    <div>
      <div>
        <EditableTimerList />
        <ToggleableTimerForm />
      </div>
    </div>
  );
}
