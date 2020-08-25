import React, { useState} from "react";

import TimerForm from "./TimerForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ToggleableTimerForm(props) {
  const [isOpen,setisOpen]=useState(false);
  const handleFormOpen=()=>{
    setisOpen(true);
  }
  const handleFormClose=()=>{
    setisOpen(false);
    
  }
  const handleFormSubmit=(timer)=>{
    props.onFormSubmit(timer);
    setisOpen(false);

  }
  if (isOpen) {
    return <TimerForm 
    onFormSubmit={handleFormSubmit}
    onFormClose={handleFormClose}
    />;
  } else {
    return (
      <div className="toggleform">
        <button onClick={handleFormOpen} className="plus button">
        <i className="fa fa-plus-square">
              <FontAwesomeIcon className="plusicon" icon={faPlus} />
              </i>
        </button>
      </div>
    );
  }
}
