import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
export default function Timer() {
  
  function toggleFavorite(event) {
event.preventDefault();
  }
  return (
    <div>
      <div className="timerContainer">
        <h1>Mow the lawn</h1>
        <p>House Chores</p>
        <time>01:12:36</time>
      <div className="fontAwesomeBinder">
      <i className="fa fa-trash-o"  onClick={(e) => this.toggleFavorite()} > <FontAwesomeIcon className="iconTrashAndEdit" icon={faTrash} /> </i>
      <i className="fa fa-edit-o"  onClick={(e) => this.toggleFavorite()} > <FontAwesomeIcon className="iconTrashAndEdit" icon={faEdit} /></i>  
      
        </div>
       
      <button className="timerBtn">START</button>
      </div>
    </div>
  );
}
