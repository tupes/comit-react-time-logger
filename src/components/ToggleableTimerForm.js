import React from "react";

import TimerForm from "./TimerForm";

export default function ToggleableTimerForm() {
  const isOpen = false;

  if (isOpen) {
    return <TimerForm />;
  } else {
    return (
      <div className="ui basic content center aligned segment">
        <button className="ui basic button icon">
          <i className="plus icon" />
        </button>
      </div>
    );
  }
}
