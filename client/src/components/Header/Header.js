import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function Header() {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" sticky="top">
      <Container>
            <Navbar.Brand href="/">Ponder Properties</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="aboutus">About Us</Nav.Link>
                <Nav.Link href="upload">Upload your property</Nav.Link>
                <Nav.Link href="contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
            <div class="d-grid gap-2 d-sm-block mx-2">
                <LoginForm></LoginForm>{' '}
            </div>
            <div class="d-grid gap-2 d-sm-block">
                <SignUpForm></SignUpForm>{' '}
            </div>
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;