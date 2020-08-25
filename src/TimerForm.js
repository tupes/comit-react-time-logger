import React from "react";

export default function TimerForm(props) {
  return (
    <div>
      <div>
        <div>
          <div>
            <label>Title</label>
            <input type="text" />
          </div>
          <div>
            <label>Project</label>
            <input type="text" />
          </div>
          <div>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
