import React from "react";

import TimerForm from "./TimerForm";

export default function ToggleableTimerForm() {
  const isOpen = false;

  if (isOpen) {
    return <TimerForm />;
  } else {
    return (
      <div className="ui basic content center aligned segment">
        
      </div>
    );
  }
}
