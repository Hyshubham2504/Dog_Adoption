import React from "react";
import "./Volunteer.css";
import ImageSlider from './Pages Components/ImageSlider';
import './Pages Components/ImageSlider.css'
import { SliderData } from './Pages Components/SliderData';
import VolunteerForm from "./Pages Components/VolunteerForm"
import './Pages Components/VolunteerForm.css'

export const Volunteer = () => {
  return (
    <div className="volunteer-page">
    
       <div className="volunteer-container">

        <h1 className="volunteer-heading">VOLUNTEER</h1>
        <h5 className="volunteer-heading2">Help save someone's new best friend.</h5>

        </div>

        <div className="volunteer-text">
          Become a part of the community, and help the needy animals from anywhere and everywhere.
        </div>

       <div className="volunteer-form">
          <VolunteerForm></VolunteerForm>
        </div>

      <div className="volunteer-slider">
      <ImageSlider slides={SliderData} />
      </div>
    </div>
  );
};
