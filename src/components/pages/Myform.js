import React from 'react';
// import '../../App.css';
import Navbar from '../Navbar';
// import '../Button.css';
import '../chat.css'
import { Link } from 'react-router-dom';


export default function Products() {
  return (
    <>
    <Navbar />
    <Link to='../form'>
      <button className='btn'>Test</button>
    </Link>
    </>  

  )
}
