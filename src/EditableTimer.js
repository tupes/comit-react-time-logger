import React,{ useState} from "react";

import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default function EditableTimer(props) {
const[editFormOpen,setEditFormOpen]=useState(false);
const handleEditForm=()=>{
  setEditFormOpen(true);
}
const handleEditFormCancel=()=>{
  setEditFormOpen(false);
}
const onFormEditSubmit=(timer)=>{
props.onFormSubmit(timer);
handleEditFormCancel();
}

  if (editFormOpen) {
    return <TimerForm 
    onFormClose={handleEditFormCancel}
    onFormSubmit={onFormEditSubmit}
    id={props.id}
    title={props.title}
    project={props.project}
    />;
  } else {
    return <Timer 
      editTimer={handleEditForm}
      id={props.id}
      title={props.title}
      project={props.project}
      elapsed={props.elapsed}
      runningSince={props.runningSince}
    />;
  }
}
