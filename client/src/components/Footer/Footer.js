import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';

 

const Footer = () => {

    return(
        <div className="container-fluid bg-danger">
            <div className="row mx-5">
                <div className="col ms-5">
                    <h2 className='text-light'>Ponder Properties</h2>
                    <span className='text-light'>Visual Real Estate to help Beginning Investors</span>
                </div>

                <div className="col-md-4 ">
                <Nav className="me-auto">
                    <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="/">Home</Nav.Link>
                    <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="aboutus">About Us</Nav.Link>
                    <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="upload">Upload your property</Nav.Link>
                    <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="contact">Contact Us</Nav.Link>
                </Nav>
                </div>
                <div className="col">
                <h1 className='text-light'>Connect with Me</h1>
                        <a href='https://twitter.com/jaypowellcs' className='link-light' target="_blank" rel="noreferrer">Twitter
                        <FontAwesomeIcon icon={faHashtag} />
                        </a>
                </div>
            </div>
            <p className='text-light'>&#169; Jay PowellCS, All Rights Reserved</p>
        </div>
       
    );
};

export default Footer; 