import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from "react-router-dom";

export default function Screening(props) {

  let posterImage = 'https://cinema-rest.nodehill.se/' + props.poster
  return (
    <div className="movie">
      <Card className="card mx-auto mb-4" style={{ width: '19rem' }}>
        <Card.Img variant="top" src={posterImage} />
        <Card.Body className="text-center">
          <Card.Title>{props.movieTitle}</Card.Title>
          <Card.Text>
            {props.time}
          </Card.Text>
          <Card.Text>
            {props.auditoriumName}
          </Card.Text>
          <Card.Text>
            Length: {props.length} min
          </Card.Text>
          {Array.isArray(props.category) && (
            <Card.Text>{props.category.join(" | ")}</Card.Text>
          )}

          <Link Link to={`/booking/${props.id}`}><Button>Book</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
}