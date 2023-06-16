import './components/NavBar-style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar(){
    return(
        <div className="nav-bar__wrapper">
            <Navbar bg="white" expand="lg">
                <Container >
                    <Navbar.Brand>
                        <div className="text-logo-wrapper">
                            <a href='/' className="text-logo">
                                <div className="logo-symbol">A</div>
                                <div className="logo-text">Atai <span className="logo-text-span">Mamytov</span></div>
                            </a>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-4">
                            <Nav.Link className="nav__links" href="/resume">Resume</Nav.Link>
                            <Nav.Link className='nav__links' href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
}