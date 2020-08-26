import React, {useState} from "react";

export default function TimerForm(props) {
  const closeForm=()=>{
    props.editFormOpen(false);
  }
  const summitForm=()=>{
    props.editFormOpen(false);
  }
  const handleTitleChange=(event)=> {
    setTitle(event.target.value)
    props.setTitle(title)

  }
  const handleProjectChange=(event)=> {
    setProject(event.target.value)
  }

  const [title, setTitle] = useState(props.title)
  const [project, setProject] = useState(props.project)
  return (
    <div className='TimerForm'>
      <div className='float-center'>
          <div>
            <label>Title</label>
            <input type="text" className='form-control' value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <label>Project</label>
            <input type="text" className='form-control' value={project} onChange={handleProjectChange}/>
          </div>
          <div className='buttonsEdit'>
            <button onClick={summitForm} className='btn btn-primary'>Update</button>
            <button onClick={closeForm} className='btn btn-danger'>Cancel</button>
          </div>
        </div>
      </div>
  
  );
}
