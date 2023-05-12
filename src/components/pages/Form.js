import React, { useState } from 'react';
import Navbar from '../Navbar';
import Question_Form from '../Question_Form';
import { useLocation } from 'react-router-dom';


export default function Form() {
  var name = new URLSearchParams(window.location.search).get("name");


  
  return (
    <>
      <Navbar />
      <Question_Form name={name} />
    </>
  );
}
