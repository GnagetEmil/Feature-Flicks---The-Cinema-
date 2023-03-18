import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Screening(props) {
  const [movieTitle, setMovieTitle] = useState('');
  const [auditoriumName, setAuditoriumName] = useState('');

  useEffect(() => {
    fetch(`/api/movies/${props.movieId}`)
      .then(response => response.json())
      .then(data => setMovieTitle(data.title))
      .catch(error => console.log(error));
  }, [props.movieId]);

  useEffect(() => {
    fetch(`/api/auditoriums/${props.auditoriumId}`)
      .then(response => response.json())
      .then(data => setAuditoriumName(data.name))
      .catch(error => console.log(error));
  }, [props.auditoriumId]);

  return (
    <div className="movie">
      <Card className="card mx-auto mb-4" style={{ width: '19rem' }}>
        <Card.Body className="text-center">
          <Card.Title>{movieTitle}</Card.Title>
          <Card.Text>
            {props.time}
          </Card.Text>
          <Card.Text>
            {auditoriumName}
          </Card.Text>
          <Card.Text>

          </Card.Text>
          <Button>View Screenings</Button>
        </Card.Body>
      </Card>
    </div>
  );
}