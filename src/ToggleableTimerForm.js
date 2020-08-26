import React, {useState} from "react";

import TimerForm from "./TimerForm";

export default function ToggleableTimerForm(props) {
  const [isOpen,setIsOpen] = useState(false);
   
  const handleFormOpen = () => {
      setIsOpen(true);
  }

  const handleFormClose = () => {
    setIsOpen(false);
}

const handleFormSubmit = (timer) => {
  props.onFormSubmit(timer);
  setIsOpen(false);
}

  if (isOpen) {
    return <TimerForm 
    onFormSubmit={handleFormSubmit} 
    onFormClose={handleFormClose}/>

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
