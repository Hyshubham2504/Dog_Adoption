import React from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import './MyCard.css'

function MyCard(props) {
  return (
    <div> 
         <Card className="home-card">
      
      <Card.Body>
        <Card.Title className="home-card-title">{props.title}</Card.Title>
        <Card.Text className="home-card-text">
            {props.text}
        {/* Every rupee makes a difference in the lives of these animals. We offers many ways to donate. */}
        </Card.Text>
        <Link to='/donate'>
         <Button className="home-card-button">{props.button}
          
         </Button>
          </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MyCard