import React from 'react';
import '../App.css';

function Cards() {
  return (
    <>
      <div class="card" onclick="location.href='https://www.link1.com';">
        <img src="../../public/images/img-9.jpg" alt="Image 1" />
      </div>
      <div class="card" onclick="location.href='https://www.link2.com';">
        <img src="../../public/images/img-9.jpg" alt="Image 2" />
      </div>
      <div class="card" onclick="location.href='https://www.link3.com';">
        <img src="../../public/images/img-9.jpg" alt="Image 3" />
      </div>
    </>

  );
}

export default Cards;
