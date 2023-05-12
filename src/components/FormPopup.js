import React, { useState } from 'react';
import './Popup.css'
import { Link } from 'react-router-dom';


function FormPopup(props) {
    const [name, setName] = useState('');
    const handleClick = (variable) => {
    const queryString = `?name=${name}`;
    window.location.href = `./pages/Form${queryString}`;
  };
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>New Form</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="form name" className="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <Link to={{ 
                pathname: '/form', search: '?name=' + name  
            }} className="button-link">
                Create
            </Link>


        </form>
        <button onClick={props.handleClose}>Close</button>
      </div>
    </div>
  );
}

export default FormPopup;
