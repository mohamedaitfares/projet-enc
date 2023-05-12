import React from 'react';
// import '../App.css';
import { Button } from './Button';
import './Hero.css';
import { Link } from 'react-router-dom';
// import './Navbar.css';

function HeroSection() {

  return (
    <div className='hero-container'>
      <h1>Créez des formulaires en ligne puissants simplement.</h1>
      <p>Avoir le bon formulaire fait toute la différence pour votre entreprise. Que vous ayez besoin de créer un formulaire d’inscription, un quizz, de collecter des paiements, ou d’avoir des rapports automatiquement générés? Créez votre formulaire en ligne en quelques minutes sans code, simplement et gratuitement.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Se connecter
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          S'inscrire 
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
