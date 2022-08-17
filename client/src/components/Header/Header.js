import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { Button} from 'reactstrap';
import React from 'react'; 
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Auth from '../Auth/Auth';


function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logout = () => {
    dispatch({type: 'LOGOUT'});
    navigate('/');
  };
 
  useEffect(() => {
    const token = user?.token; 

    //JWT...

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

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
              {user ? (
                <>
                <div class="d-grid gap-2 d-sm-block mx-2"> {' '}
                <Button variant="secondary" color='danger'>User</Button>{' '}
                </div>
                <div class="d-grid gap-2 d-sm-block">{' '}
                <Button variant="secondary" color='light'>Log out</Button>{' '}
                </div>
              </>
              ) : ( 
                <>
                <div class="d-grid gap-2 d-sm-block mx-2"> 
                <Auth></Auth>{' '}  
                </div>
                </>
              )}
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;