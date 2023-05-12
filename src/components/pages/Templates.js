import React from 'react';
import '../chat.css';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';


export default function Template() {
  return (
    <>
    <Navbar />
    <Link to='../form'>
      <button className='btn'>Test</button>
    </Link>
    </>  

  )
}