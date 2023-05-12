import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Form from './components/pages/Form';
import Myform from './components/pages/Myform';
import SignUp from './components/pages/SignUp';
import First from './components/pages/First';
import Templates from './components/pages/Templates';
import Footer from './components/Footer';



function BigApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<First />} />
          <Route path='/home' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/myforms' element={<Myform />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/templates' element={<Templates />} />
        </Routes>
      </Router>
      <Footer />
  </>
  );
}

export default BigApp;