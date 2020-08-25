import React from "react";
import "../css/styles.css";
import TimerForm from "./TimerForm";

export default function ToggleableTimerForm() {
  const isOpen = false;

  if (isOpen) {
    return <TimerForm />;
  } else {
    return (
      <button className="toggleAbleTimerBtn">Add new Timer</button>
    );
  }
}
