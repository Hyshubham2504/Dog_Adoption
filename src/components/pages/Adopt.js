import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageSlider from './Pages Components/ImageSlider';
import { SliderData } from './Pages Components/SliderData';
import './Pages Components/ImageSlider.css'
import "../pages/Adopt.css";
import AdoptCard from "./Pages Components/AdoptCard";
import dog6 from "../Images/dog-6.jpeg";
import cat4 from "../Images/cat-4.jpeg";
import dog7 from "../Images/dog-7.jpeg";
import dog8 from "../Images/dog-8.jpeg";
import dog9 from "../Images/dog-9.jpeg";
import rabbit2 from "../Images/rabbit-2.jpg";

export const Adopt = () => {
  return (
    <div className="adopt-page">
      <div className="adopt-container">
        <h1 className="adopt-heading">ADOPT</h1>
        <h5 className="adopt-heading2">A little love is all they need.</h5>
      </div>

      <div className="adopt-text">
        Saving one animal won’t change the world, but it will change the world
        for that one animal.
      </div>

      <div className="adopt-cards">
      <Container>
      <Row>
      <Col>
       
        <AdoptCard
          
          title="Berry"
          src={dog6}
          ageText="Age: 8 months"
          breedText=" Breed: Indie"
          locationText="Location: Bhopal"
        ></AdoptCard>
       
        </Col>
        <Col>
       
        <AdoptCard
         
          title="Bella"
          src={cat4}
          ageText="Age: 3 months"
          breedText=" Breed: Indie"
          locationText="Location: Bhubaneswar"
        ></AdoptCard>
        
        </Col>
        <Col>
        
        <AdoptCard
         
          title="Pickle"
          src={dog7}
          ageText="Age: 2 years"
          breedText=" Breed: Indie"
          locationText="Location: Delhi"
        ></AdoptCard>
          
          </Col>
          </Row>

          <Row>
          <Col>
          
         <AdoptCard
          
          title="Cherry"
          src={dog8}
          ageText="Age: 7 months"
          breedText=" Breed: Indie"
          locationText="Location: Jaipur"
        ></AdoptCard>
        
        </Col>
        <Col>
          
         <AdoptCard
          
          title="Snowy"
          src={rabbit2}
          ageText="Age: 1 year"
          breedText=" Breed: Newzealand White"
          locationText="Location: Bengaluru"
        ></AdoptCard>
        
        </Col>
        <Col>
          
         <AdoptCard
          
          title="Litchi"
          src={dog9}
          ageText="Age: 6 months"
          breedText=" Breed: Indie"
          locationText="Location: Mumbai"
        ></AdoptCard>
        
        </Col>
        
       
       </Row>
       </Container>
        </div>
        
      
        <div className="donate-slider">
      <ImageSlider slides={SliderData} />
      </div>
    </div>
  );
};
