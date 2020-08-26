import React, {useState} from "react";
import uuid from "uuid";

export default function TimerForm(props) {
  const submitText = props.id ? 'Update' : 'Create';
  const [title,setTitle] = useState("");
  const [project,setProject] = useState("");
  
  const handleSubmit = () => {
    props.onFormSubmit(
      {
      id: uuid.v4(),
      title: title,
      project: project
      }
    )
  }  

   const handleTitleChange = (e) => {
      setTitle(
        { title: e.target.value } 
         )
         e.preventDefault();   
      }

   const handleProjectChange = (e) => {

      setProject(
        { project: e.target.value }
        )
        e.preventDefault();
    }

  return (
    <div className='timer-form'>
          <div className='timer-form-title'>
            <label>Title</label><br/>
            <input type="text" 
            value={props.title} 
            onChange={handleTitleChange} name="title"/>
          </div> 

          <div className='timer-form-project'> 
            <label>Project</label><br/>
            <input type="text" 
            value={props.project} 
            onChange={handleProjectChange} name="project"/>
          </div>

          <div className='update-cancel-buttons'>
            <button onClick={handleSubmit}>{submitText}</button>
            <button onClick={props.onFormClose}>Cancel</button>
          </div>
  </div>        
  )
}
