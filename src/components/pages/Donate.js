import React from "react";
import "./Donate.css";
import ImageSlider from './Pages Components/ImageSlider';
import { SliderData } from './Pages Components/SliderData';
import './Pages Components/ImageSlider.css'
import DonateForm from "./Pages Components/DonateForm";
import './Pages Components/DonateForm.css'

export const Donate = () => {
  return (
    <div className="donate-page">
      <div className="donate-container">

        <h1 className="donate-heading">DONATE</h1>
        <h5 className="donate-heading2">Let's help the needy</h5>

        <div className="donate-form">
          <DonateForm></DonateForm>
        </div>

   
      </div>
      <div className="donate-slider">
      <ImageSlider slides={SliderData} />
      </div>
    </div>
  );
};
