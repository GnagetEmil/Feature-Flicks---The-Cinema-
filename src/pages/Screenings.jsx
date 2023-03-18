import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Screening from '../components/Screening';

const Screenings = () => {
    const [screenings, setScreenings] = useState([]);

    useEffect(() => {
        (async () => {
            const screeningsData = await (await fetch('/api/screenings/?sort=time')).json();
            setScreenings(screeningsData);
        })();
    }, []);

    return (
        <Container className="text-center">
            <Row className="justify-content-center align-items-center mt-4" style={{ height: '100%' }}>
                {screenings.map(({ id, time, movieId, auditoriumId }) => (
                    <Col key={id} className="my-4">
                        <Screening id={id} time={time} movieId={movieId} auditoriumId={auditoriumId} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Screenings;