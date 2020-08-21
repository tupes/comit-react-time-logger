import React from "react";
import "../css/styles.css";

export default function TimerForm() {
  return (
    
      <div className="timerContainer">
        <h2>Title</h2>
        <input type="text"/>
        <h2>Project</h2>
        <input type="text"/>
        <div className="updateAndDeleteBtnBinder">
      <button className="updateAndDeleteBtn">Update</button>
      <button className="updateAndDeleteBtn">Delete</button>
      </div>
      </div>
   
  );
}
