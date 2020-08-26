import React from "react";
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import './index.css'

export default function Timer(props) {
  
  function editTimer(id) {
    console.log('edit');
    props.editFormOpen(true);
    
  }
  function deleteTimer() {
    console.log('delete');
  }
  
  return (
    <div >
        
          <div className='timer'>
            <h2 key={props.key}> {props.project}</h2>
            <h4>{props.title}</h4>
            <h5>{props.elapsed}</h5>
            <div className='float-right actions'>
              <span>
                <FaTrash onClick={deleteTimer} className='float-right'/>
              </span>
              <span>
                <FaEdit onClick={()=>editTimer(props.id)} className='float-right ' />
              </span>
            </div>
            <button className='btn btn-success'>Start</button>
          </div>
  
    </div>
    
  );
}
