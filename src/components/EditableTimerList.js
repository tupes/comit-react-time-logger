import React from "react";
import "../css/styles.css";
import EditableTimer from "./EditableTimer";

export default function EditableTimerList() {
  return (
    <div className="editableTimerListContainer">

      <div className="editableTimerContainer">
      <div className="logoHolder"></div>
      <EditableTimer />
      </div>
    </div>
  );
}
