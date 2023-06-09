import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from "react-router-dom";

export default function Movie(props) {
  let { title, description } = props;
  let { posterImage } = description;

  posterImage = 'https://cinema-rest.nodehill.se/' + posterImage;

  return (
    <div className="movie">
      <Card className="card mx-auto mb-4" style={{ width: '19rem' }}>
        <Card.Img variant="top" src={posterImage} />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Button>View Screenings</Button>
          <Outlet />
        </Card.Body>
      </Card>

    </div >

  );
}