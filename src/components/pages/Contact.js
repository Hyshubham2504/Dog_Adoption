import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageSlider from './Pages Components/ImageSlider';
import { SliderData } from './Pages Components/SliderData';
import './Pages Components/ImageSlider.css'
import "../pages/Contact.css";
import ContactTable from "./Pages Components/ContactTable";

export const Contact = () => {
  return (
    <div className="contact-page">
    <div className="contact-container">
      <h1 className="contact-heading">CONTACT</h1>
      <h5 className="contact-heading2">Save animals, serve humanity</h5>
    </div>

    <div className="contact-text">
    Give them the care they need, love they deserve
    </div>

 

 <div className="contact-list">
<ContactTable></ContactTable>
</div>
      
    
      <div className="donate-slider">
    <ImageSlider slides={SliderData} />
    </div>
  </div>
  );
};