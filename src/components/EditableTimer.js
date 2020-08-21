import React from "react";

import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default function EditableTimer() {
  const editFormOpen = false;

  if (editFormOpen) {
    return <TimerForm />;
  } else {
    return <Timer />;
  }
}
