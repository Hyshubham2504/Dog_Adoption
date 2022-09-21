import React from "react";
import "../pages/Home.css"
import card1 from "../Images/card1.png"
import card2 from "../Images/card2.png"
import card3 from "../Images/card3.png"
import card4 from "../Images/card4.png"
import card5 from "../Images/card5.png"
import card6 from "../Images/card6.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cat1 from '../Images/cat-1.jpg'
import Button from 'react-bootstrap/Button';
import dog1 from '../Images/dog-1.jpg';
import {Link} from "react-router-dom";
import MyCard from "./Pages Components/MyCard";




export const Home = () => {
  
  return (
    <div className="homePage">
     
       <div className="part-1">
        <div className="background-img">
        <h1 className="top-heading">Together, We can save a lot of loving souls.</h1>
        </div>
        
      </div> 
       


      <div className="part-2">
        <img src={card1} alt="card-1" />
        <img src={card2} alt="card-2" />
        <img src={card3} alt="card-3" />
        <img src={card4} alt="card-4" />
        <img src={card5} alt="card-5" />
        <img src={card6} alt="card-6" />
      </div>

      <div className="part-3">

      <Container>
      <Row>
        <Col>
        
          <div className="part-3-left-side">
            <img src={cat1} className="cat1-img" alt="cat1" />
          </div>
        
        </Col>
        
        
        <Col>
        <div className="part-3-right-side">
          
          <Col>
          <Row>
          <h3>
          79.9 MILLION ANIMALS AT RISK
          </h3>
          </Row>

          <Row>
          In India, stray animals are misunderstood as dangerous, savage animals. We work alongside India’s local shelters to rescue, rehabilitate, vaccinate, and house these strays in need.
          </Row>

          <Row>
          <Link to='/donate'>
          <Button bsPrefix='custom-class'  >
              Donate
           </Button>
           </Link>
           
          </Row>

          </Col>
          </div>
        </Col>
      </Row>
     
    </Container>
      </div>

      <div className="part-4">

      <Container>
      <Row>
      
        <Col>
        <div className="part-4-left-side">
          
          <Col>
          <Row>
          <h3>
          A BETTER LIFE FOR INDIA’S STRAY ANIMALS
          </h3>
          </Row>

          <Row>
          Stray animals roam the streets of India without food, veterinary care or refuge from the elements. Help us give them a chance.
          </Row>

          <Row>
          <Link to='/about'>
          <Button  bsPrefix='custom-class'  >
             About Us
           </Button>
           </Link>
          
          </Row>

          </Col>
          </div>
        </Col>

        <Col>
        
        <div className="part-4-right-side">
          <img src={dog1} className="dog1-img" alt="dog1" />
        </div>
      
      </Col>
      </Row>
     
    </Container>
      </div>

<div className="part-5">
      
    <MyCard title=" Donate" 
    text=" Every rupee makes a difference in the lives of these animals. We offers many ways to donate."
    button="Donate"/>
    <MyCard title="Volunteer" 
    text=" Find volunteer opportunities in India, US or internationally!"
    button="Volunteer"/>
    <MyCard title=" Adopt" 
    text="  Everyone deserves a home. See how you can help our shelter animals find forever families."
    button="Adopt"/>
  


    </div>

    <div className="part-6">

      <div className="footer-image">

      </div>
    </div>

    </div>
  );
};