import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
    return (
        <Navbar bg="dark" variant="dark" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Screenings</Nav.Link>
                    <Nav.Link href="#features">Movies</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default navbar;