import React from "react";

import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default function EditableTimer(props) {
  const editFormOpen = false;

  /*const handleEditClick = () => {
    openForm();
  }

  const handleFormClose = () => {
    closeForm();
  }

  const handleSubmit = (timer) => {
      props.onFormSubmit(timer);
      closeForm();
  }

  const closeForm = () => {
    editFormOpen = false;
  }

  const openForm = () => {
    editFormOpen = true;
  }
*/
  if (editFormOpen) {
    return <TimerForm 
    id={props.id}
    title={props.title}
    project={props.project}  
    //onFormSubmit={handleSubmit}
    //onFormClose={handleFormClose}
    />;
  } else {
    return <Timer 
    id={props.id}
    title={props.title}
    project={props.project}
    elapsed={props.elapsed}
    runningSince={props.runningSince} 
    //onEditClick={handleEditClick}
    />;
  }
}
