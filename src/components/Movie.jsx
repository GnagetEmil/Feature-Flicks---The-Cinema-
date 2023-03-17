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
          <Card.Text>
            THIS IS A DESCRIPTION
          </Card.Text>
          <Button variant="primary" onClick={() => setTitle(title)}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div >
  );
}
function setTitle(movieTitle) {
  alert(movieTitle);
  var title = movieTitle
}
function getTitle() {
  return title;
}