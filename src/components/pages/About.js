import React from "react";
import "../pages/About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ImageSlider from './Pages Components/ImageSlider';
import { SliderData } from './Pages Components/SliderData';
import './Pages Components/ImageSlider.css'


export const About = () => {
  return (
    <div className="aboutPage">
      <div className="abt-part-1">
        <Card className="abt-part-1-card">
          <h3 className="abt-part-1-heading1">Our Mission</h3>
          <div className="abt-part-1-heading2">
            FORGING NEW LIVES FOR INDIA’S FORGOTTEN ANIMALS
          </div>
          <div className="abt-part-1-text">
            We are a community, working to build a strong, compassionate
            animal welfare network all over India, providing shelter
            infrastructure, vet care, supplies, guidance, resources, education,
            and manpower.
          </div>
        </Card>
      </div>

      <div className="abt-part-2">
        <Container>
          <Row>
            <Col lg={7}>
              <h3 className="abt-part-2-heading1">The Challenge</h3>
              <div className="abt-part-2-heading2">
                FIGHTING AN UPHILL BATTLE
              </div>

              <div className="abt-part-2-text1">
                Although a historic and beautiful country, India is not without
                its challenges. India’s nearly 80 million stray animals face not
                only a brutal climate and limited resources, but must contend
                with a culture that views them as pests or threats. We’re
                working to restore compassion to our country's relationship with
                its stray animals, easing the strain on India’s overburdened
                shelter network through funding, organizational support,
                education, and more.
              </div>

              <div className="abt-part-2-heading3">WE WORK TO:</div>

              <div className="abt-part-2-text2">
                • Increase our own ability to help special cases no one else
                will <br></br>• Bolster India’s rescue, foster and adoption
                network <br></br>• Expand access to animal birth control,
                vaccinations, and more <br></br>• Recruit and train animal
                rescue and control teams<br></br>• Educate the Indian public to
                combat stereotypes, reduce abuse, and increase adoption
              </div>
            </Col>
            <Col lg={1}>
              
            </Col>
        
            <Col lg={4} className="stats-box">
              <Row className="stats-num">
                <Col lg={4} md={2} sm={4}>
                  <div className="num-1">80M</div>
                </Col>

                <Col lg={8} md={10} sm={8}>
                  <div className="line-1">
                    stray dogs & cats living on India’s streets
                  </div>
                </Col>
              </Row>

              <Row className="stats-num">
                <Col lg={4} md={2} sm={4}>
                  <div className="num-2">8.8M</div>
                </Col>
                <Col lg={8} md={10} sm={8}>
                  <div className="line-2">
                    strays in India’s shelters, and quickly running out of space
                  </div>
                </Col>
              </Row>

              <Row className="stats-num">
                <Col lg={4} md={2} sm={4}>
                  <div className="num-3">9.1M</div>
                </Col>
                <Col lg={8} md={10} sm={8}>
                  <div className="line-3">stray homeless cats in India</div>
                </Col>
              </Row>

              <Row className="stats-num">
                <Col lg={4} md={2} sm={4}>
                  <div className="num-4">50%</div>
                </Col>
                <Col lg={8} md={10} sm={8}>
                  <div className="line-4">pet relinquishment rate</div>
                </Col>
              </Row>

              <Row className="stats-num">
                <Col lg={4} md={2} sm={4}>
                  <div className="num-5">80%</div>
                </Col>
                <Col lg={8} md={10} sm={8}>
                  <div className="line-5">
                    people think street dogs should be removed
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="abt-part-3">
      <ImageSlider slides={SliderData} />
      </div>
      

    </div>
  );
};
