import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from '../components/Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            setMovies(await (await fetch('/api/movies')).json());
        })();
    }, []);

    return (
        <Container className="text-center">
            <Row className="justify-content-center align-items-center mt-4" style={{ height: '100%' }}>
                {movies.map(({ id, title, description }) => (
                    <Col key={id} className="my-4">
                        <Movie title={title} description={description} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Movies;