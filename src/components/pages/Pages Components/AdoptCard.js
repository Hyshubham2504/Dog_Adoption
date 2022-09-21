import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./AdoptCard.css"

function AdoptCard(props) {
  return (
    <div>
    <Card className='adoption-card'>
      <Card.Img variant="top" src={props.src} className="adopt-card-img"/>
      <Card.Body>
        <Card.Title className="adopt-card-title">{props.title}</Card.Title>
        <Card.Text className="adopt-card-text">
          {props.ageText}
        </Card.Text>
        <Card.Text className="adopt-card-text">
          {props.breedText}
        </Card.Text>
        <Card.Text className="adopt-card-text">
          {props.locationText}
        </Card.Text>
        <Button variant="primary" className="adopt-card-button">Fill Adoption Application</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AdoptCard;