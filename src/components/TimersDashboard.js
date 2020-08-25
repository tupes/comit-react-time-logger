import React from "react";
import "../css/styles.css";

import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

export default function TimersDashboard() {
  return (
    <div>
      <div className="container">
       <h1>hello from Bibu Branch Lets merge</h1>
        <EditableTimerList />
        <ToggleableTimerForm isOpen={false}/>
      </div>
    </div>
  );
}
