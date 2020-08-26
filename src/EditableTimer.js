import React, {useState} from "react";

import { v4 as uuidv4 } from 'uuid';

import TimerForm from "./TimerForm";
import Timer from "./Timer";


export default function EditableTimer(props) {
  const [editFormOpen, setEditFormOpen]= useState(false);
  
  const [uuid,setuuid]=useState(0);
  const setFormOpen=(value) => {
    setEditFormOpen(value);
  }

  const setTitle=(value) => {
    props.title=value;
  }

  if (editFormOpen) {
    return <TimerForm
     editFormOpen={setFormOpen}
     id={props.id}
     title={props.title}
     project={props.project}  
     setTitle={setTitle}  
     />;
  } else {
    return <Timer 
    id={props.id}
    title={props.title}
    project={props.project}
    elapsed={props.elapsed}
    runningSince={props.runningSince}
    
    editFormOpen={setFormOpen} 
     />;
  }
}
