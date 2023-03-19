import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Screening(props) {
  return (
    <div className="movie">
      <Card className="card mx-auto mb-4" style={{ width: '19rem' }}>
        <Card.Body className="text-center">
          <Card.Title>{props.movieTitle}</Card.Title>
          <Card.Text>
            {props.time}
          </Card.Text>
          <Card.Text>
            {props.auditoriumName}
          </Card.Text>
          <Card.Text>
            {props.category}
          </Card.Text>
          <Button>Book</Button>
        </Card.Body>
      </Card>
    </div>
  );
}