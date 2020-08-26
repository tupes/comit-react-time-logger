import React from "react";

import EditableTimer from "./EditableTimer";

export default function EditableTimerList({statetimers}) {

  const timers = statetimers.map((timer) => (
    <EditableTimer 
    key={timer.id}
    id={timer.id}
    title={timer.title}
    project={timer.project}
    elapsed={timer.elapsed}
    runningSince={timer.runningSince}
    onFormSubmit={statetimers.onFormSubmit} />
  )  
  ) 
  
  return(
    <div id='timers'>
    {timers}
    </div>
      )
}

 /* return (
    <div id="timers">
      <EditableTimer 
      title='Learn React'
      project='Web Domination'
      elapsed='8986300'
      runningSince={null}
      editFormOpen={false} />
      
      <EditableTimer 
      title='Learn extreme ironing'
      project='World Domination'
      elapsed='3890985'
      runningSince={null}
      editFormOpen={true} />
    </div>
  ) */
