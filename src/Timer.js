import React from "react";
import helpers from './helpers.js';
import  "./style.css";

export default function Timer(props) {
  const elapsedString = helpers.renderElapsedString(props.elapsed);

  return (
    <div className='ui-centered-card'>
      <div className='content'>
        <div className='title'>{props.title}</div>
        <div className='project'>{props.project}</div>
        <div className='timer-header'>
          <h2>{elapsedString}</h2>
        </div>
        <div className='icon-div'>
          <span className='right-floated-edit-icon'>
            <i class="fa fa-edit"/>
          </span>
          <span className='right-floated-trash-icon'>
          <i class="fa fa-trash"/>
          </span>
        </div>
      </div>
      <div className='start-button-div'>
        <button className='start-button'>Start</button>
      </div>
    </div>
  );
}
