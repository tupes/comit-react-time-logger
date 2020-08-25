import React from "react";
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import './index.css'

export default function Timer(props) {
  return (
    <div >
        {props.timers.map(timer=>
        (
          <div className='timer'>
          <h1>{timer.project}</h1>
          <h2>{timer.title}</h2>
          <div>
          <span>
            <FaTrash/>
          </span>
          <span>
            <FaEdit />
          </span>
      </div>
      <button>Start</button>
          </div>
          
        )
        )
        }
    
      


    </div>
    
  );
}
