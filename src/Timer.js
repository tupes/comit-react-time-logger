import React , { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  
} from "@fortawesome/free-solid-svg-icons";
import {timerContext} from './TimersDashboard';


export default function Timer(props) {

  const elapsedString = "Time";
  const context=useContext(timerContext);
  const onTrashClick=()=>{
    context.handleTrashClick(props.id);
  }
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
          <span className="right floated edit icon" onClick={onTrashClick}>
          <i className="fa fa-trash-o"> 
          <FontAwesomeIcon className="iconTrashAndEdit" icon={faTrash} /> 
          </i>
          </span>
          <span className="right floated trash icon'>" onClick={props.editTimer}>
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
