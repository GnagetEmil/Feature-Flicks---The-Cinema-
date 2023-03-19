import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from "react-router-dom";
import Movie from './Movie';

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
          {Array.isArray(props.category) && (
            <Card.Text>{props.category.join(" | ")}</Card.Text>
          )}

          <Link to={`/booking/${props.id}`}><Button>Book</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
}