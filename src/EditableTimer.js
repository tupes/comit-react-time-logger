import React,{ useState} from "react";

import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default function EditableTimer(props) {
const[editFormOpen,seteditFormOpen]=useState(false);

  if (editFormOpen) {
    return <TimerForm 
    id={props.id}
    title={props.title}
    project={props.project}
    />;
  } else {
    return <Timer 
      id={props.id}
      title={props.title}
      project={props.project}
      elapsed={props.elapsed}
      runningSince={props.runningSince}
    />;
  }
}
