import React from "react";
import "../css/styles.css";

import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

export default function TimersDashboard() {
  return (
    <div>
      <div className="container">
       
        <EditableTimerList />
        <ToggleableTimerForm isOpen={false}/>
      </div>
    </div>
  );
}
