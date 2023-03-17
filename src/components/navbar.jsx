// Import Bootstrap
import { Container, Nav, Navbar } from "../bootstrap";

// Import router
import { Outlet, Link } from "react-router-dom";

function navbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed='top'>
                <Nav className="me-auto">
                    {/* Uses router to swap between pages */}
                    <Link className="nav-link" Link to="/screenings">Screenings</Link>
                    <Link className="nav-link" Link to="/movies">Movies</Link>
                </Nav>
            </Navbar>

            <Outlet />
        </>
    );
}

export default navbar;