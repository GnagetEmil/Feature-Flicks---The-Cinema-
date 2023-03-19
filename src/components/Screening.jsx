import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Screening(props) {
  const [movieTitle, setMovieTitle] = useState('');
  const [auditoriumName, setAuditoriumName] = useState('');
  const [category, setCategories] = useState('');;

  // Get The Movie Title Based On the MovieId 
  useEffect(() => {
    fetch(`/api/movies/${props.movieId}`)
      .then(response => response.json())
      .then(data => setMovieTitle(data.title))
      .catch(error => console.log(error));
  }, [props.movieId]);

  // Get The Auditorium Name Based On the AuditoriumId
  useEffect(() => {
    fetch(`/api/auditoriums/${props.auditoriumId}`)
      .then(response => response.json())
      .then(data => setAuditoriumName(data.name))
      .catch(error => console.log(error));
  }, [props.auditoriumId]);


  useEffect(() => {
    fetch(`/api/movies/${props.movieId}`)
      .then(response => response.json())
      .then(data => setCategories(data.description.categories))
      .catch(error => console.log(error));
  }, [props.movieId]);

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
            {category + " "}
          </Card.Text>
          <Button>Book</Button>
        </Card.Body>
      </Card>
    </div>
  );
}