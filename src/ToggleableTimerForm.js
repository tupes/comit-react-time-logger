import React from "react";

import TimerForm from "./TimerForm";
import { FaPlus } from 'react-icons/fa';


export default function ToggleableTimerForm() {
  const isOpen = false;

  if (isOpen) {
    return <TimerForm />;
  } else {
    return (
      <div className="ui basic content center aligned segment">
        <button className="toggleAddButton">
          <FaPlus/>
        </button>
      </div>
    );
  }
}
