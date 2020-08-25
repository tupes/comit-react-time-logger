import React, {useState} from "react";

import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default function EditableTimer() {
  // const editFormOpen = false;

  // if (editFormOpen) {
  //   return <TimerForm />;
  // } else {
  //   return <Timer />;
  // }
return(
<>
<Timer project={this.project} title={this.title} />
<TimerForm  />
 
</>
);
}
