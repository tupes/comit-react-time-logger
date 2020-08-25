import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  
} from "@fortawesome/free-solid-svg-icons";



export default function Timer(props) {
  const elapsedString = "Time";
  return (
    <div className="ui centered card">
      <div className="content">
        <div className="header">
          {props.title}
        </div>
        <div className="meta">
          {props.project}
        </div>
        <div className="center-timer">
         <h2>{elapsedString}</h2>
        </div>
        <div className="icons">
          <span className="right floated edit icon">
          <i class="fa fa-trash-o"> 
          <FontAwesomeIcon className="iconTrashAndEdit" icon={faTrash} /> 
          </i>
          </span>
          <span className="right floated trash icon'>">
            <i className="fa fa-edit-o">
            <FontAwesomeIcon className="iconTrashAndEdit" icon={faEdit} />
            
              </i>
              
          </span>
        </div>
      </div>
      <div>
        <button className="bottom button">Start</button>
      </div>
    </div>
  );
}
