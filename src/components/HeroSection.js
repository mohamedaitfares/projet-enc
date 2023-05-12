import './Hero.css';
import React, { useState } from "react";
import FirstPopup from "./FirstPopup";
import FormPopup from "./FormPopup";

const HeroSection = () => {
  const [showFirstPopup, setShowFirstPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);

  const handleFirstPopupClose = () => {
    setShowFirstPopup(true);
  };

  const handleFormPopupClose = () => {
    setShowFormPopup(false);
  };

  const handleFormButtonClick = () => {
    setShowFormPopup(true);
    setShowFirstPopup(false);
  };

  return (
    <>
    <div className="homepage">
          {!showFirstPopup && !showFormPopup &&
          <div>
            <section className="hero">
            <div className="container">
              <h1>Create custom forms with ease</h1>
              <p>Choose from a variety of form elements and styles to build the perfect form for your needs.</p>
              <button onClick={handleFirstPopupClose}>Create a new form</button>
            </div>
            </section>
            
            </div>
          }
          {showFirstPopup && <FirstPopup handleClose={handleFirstPopupClose} handleButtonClick={handleFormButtonClick}/>}
          {showFormPopup && <FormPopup handleClose={handleFormPopupClose} />}
    </div>
    <div>
            <section className="features">
              <div className="container">
                <h2>Features</h2>
                <div className="feature-list">
                  <div className="feature-item">
                    <i className="fa fa-mouse-pointer"></i>
                    <h3>Drag and Drop Builder</h3>
                    <p>Easily build your form by dragging and dropping form elements.</p>
                  </div>
                  <div className="feature-item">
                    <i className="fa fa-paint-brush"></i>
                    <h3>Customizable Styles</h3>
                    <p>Choose from a variety of form styles or customize your own.</p>
                  </div>
                  <div className="feature-item">
                    <i className="fa fa-eye"></i>
                    <h3>Real-time Preview</h3>
                    <p>See your form take shape as you build it with our real-time preview.</p>
                  </div>
                  <div className="feature-item">
                    <i className="fa fa-chart-bar"></i>
                    <h3>Form Analytics</h3>
                    <p>Track your form submissions and see detailed analytics on your form's performance.</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="testimonials">
              <div className="container">
                <h2>What our users are saying</h2>
                <div className="testimonial-list">
                  <div className="testimonial-item">
                    <p>"Form Creator has made it so easy for me to create custom forms for my business. The drag and drop builder is intuitive and the analytics feature helps me track my form submissions."</p>
                    <cite>- John, Small Business Owner</cite>
                  </div>
                  <div className="testimonial-item">
                    <p>"I've tried a lot of different form builders, but Form Creator is by far the best. The design options are great and the support team is always available to help if I have questions."</p>
                    <cite>- Sarah, Marketing Manager</cite>
                  </div>
                </div>
              </div>
            </section>
    </div> 
    </>   
  );
};

export default HeroSection;
