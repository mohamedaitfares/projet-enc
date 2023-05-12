import React from 'react';
import '../chat.css';
import Cards from '../Cards';
import HeroFirst from '../HeroFirst';
import FirstNavbar from '../FirstNavbar';


function First() {
  return (
    <>
      <FirstNavbar />
      <HeroFirst />
      <Cards />
    </>
  );
}

export default First;