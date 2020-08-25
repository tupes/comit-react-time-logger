import React from "react";

export default function TimerForm(props) {
  const submitText = props.title ? 'Update' : 'Create';
  
  const state = {
    title: props.title || '',
    project: props.project || '',
    }

   const handleTitleChange = (e) => {
      this.setState({ title: e.target.value });
      }

   const handleProjectChange = (e) => {
      this.setState({ project: e.target.value });
      }

  return (
    <div className='timer-form'>
          <div className='timer-form-title'>
            <label>Title</label><br/>
            <input type="text" 
            value={state.title} onChange={handleTitleChange} />
          </div> 

          <div classname='timer-form-project'> 
            <label>Project</label><br/>
            <input type="text" 
            value={state.project} onChange={handleProjectChange} />
          </div>

          <div className='update-cancel-buttons'>
            <button value={submitText}>Update</button>
            <button>Cancel</button>
          </div>
  </div>        
  )
}
