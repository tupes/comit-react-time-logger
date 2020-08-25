import React, { useState } from "react";

export default function TimerForm(props) {
  const submitText= props.title?"Update":"Create";
  const [title,setTitle]=useState("");
  const [project,setProject]=useState("");
  const handleTitleChange=(e)=>{
    setTitle(e.target.value);
  }
  const handleProjectChange=(e)=>{
    setProject(e.target.value);
  }
 const  handleSubmit = () => {
    props.onFormSubmit({
    id: 3,
    title: title,
    project: project
    });
    };
  
  return (
    <div className="ui centered card">
      <div className="column">
        <div className="ui form">
          <div className="field">
            <label>Title</label>
            <input type="text" defaultValue={props.title} name="title"  onChange={handleTitleChange} />
          </div>
          <div className="field">
            <label>Project</label>
            <input type="text" defaultValue={props.project} name="project"  onChange={handleProjectChange}/>
          </div>
          <div className="ui two bottom attached buttons'>">
            <button className="ui basic blue button" onClick={handleSubmit}>
              {submitText}
            </button>
            <button className="ui basic red button" onClick={props.onFormClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
