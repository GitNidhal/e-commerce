import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function SlideShow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{marginTop:".2rem",margin:"auto"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/img1.jpg"
          alt="First slide"
          style={{weight:"100%"}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/img2.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/img3.jpg"
          alt="Third slide"/>

       
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;