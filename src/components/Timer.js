import React from "react";
// import { faHeart, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
export default function Timer() {
  return (
    <div>
      <div className="timerContainer">
        <h1>Mow the lawn</h1>
        <p>House Chores</p>
        <time>01:12:36</time>
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faEdit} />
        

      <button className="timerBtn">START</button>
      </div>
    </div>
  );
}
