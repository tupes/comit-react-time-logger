import React, {useState} from "react";

import { v4 as uuidv4 } from 'uuid';

import TimerForm from "./TimerForm";
import Timer from "./Timer";


export default function EditableTimer() {
  const editFormOpen = false;
  const [timers, setTimers] = useState([
    {
      title: 'Practice squat', project: 'Gym Chores', id: uuidv4(),
      elapsed: 5456099, runningSince: Date.now(),
    }, 
    {
      title: 'Bake squash', project: 'Kitchen Chores', id: uuidv4(),
      elapsed: 1273998, runningSince: null,
    }, 
  ])
  

  if (editFormOpen) {
    return <TimerForm />;
  } else {
    return <Timer timers={timers} />;
  }
}
