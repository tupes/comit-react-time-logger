import React from "react";

import TimerForm from "./TimerForm";

export default function ToggleableTimerForm(isOpen) {
  const state = {
    isOpen: false,
    };

  const handleFormOpen = () => {
      this.setState({ isOpen : true})

  }
  if (state) {
    return <TimerForm />;
  } else {
    return (
      <div className="toggableTimerForm">
        <button className="plusButton" onClick={handleFormOpen}>
          <i className="fa fa-plus"/>
        </button>
      </div>
    );
  }
}
