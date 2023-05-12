import React from "react";
import './Popup.css'


function FirstPopup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Create a New Form</h2>
        <p>Click the button below to create a new form:</p>
        <button onClick={props.handleButtonClick}>Create Form</button>
        <button onClick={props.handleClose}>Close</button>
      </div>
    </div>
  );
}

export default FirstPopup;
