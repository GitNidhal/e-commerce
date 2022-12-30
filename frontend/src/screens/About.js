import React from "react";
import './About.css'

const About = () => {
  return (
    <div className="section">
      <div className="containerr">
        <div className="content-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>Nidhal Rebhi shopping</h3>
            <h1>"I feel welcomed, I feel included, I feel seen, and able to be me."</h1>
            <h3>
              NR_Shop employee Trixie Ingleby joined .. because the company
              provides health care benefits that include gender affirming
              surgery; she stayed because of the people.
              </h3>
            <div className="button" style={{borderRadius:"12px"}}>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="social">
            <a href="fb">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="tw">
              <i className="fab fa-twitter" />
            </a>
            <a href="in">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <div className="image-section">
          <img alt="about" src="./nrshop.png" />
        </div>
      </div>
    </div>
  );
};

export default About;
