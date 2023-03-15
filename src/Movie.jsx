import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Movie(props) {

  // Destructure props into separate variables
  let { title, description } = props;
  let { posterImage } = description;

  // Add the correct domain to the image path
  posterImage = 'https://cinema-rest.nodehill.se/' + posterImage;

  return (

    <div className="movie">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={posterImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            THIS IS A DESCRIPTION
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

  );
} 