import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { GoogleLogin } from 'react-google-login';
import {useDispatch} from 'react-redux';
import {signin, signup} from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

const Auth = (args) => {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp )
    }

    const toggle = () => setModal(!modal);
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        email: '',
    });
      
    //const dispatch = useDispatch();
    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();

    if(isSignUp) {
        dispatch(signup(userInfo, navigate))
    } else {
        dispatch(signin(userInfo, navigate))
    }
    console.log(userInfo);
    setUserInfo({  
        username: '',
        password: '', 
        email: '',
        });
    };
      
    const googleSuccess = async (res) => {
    const result = res?.profileObj; //undefined 
    const token = res?.tokenId; 
    
    try {
        dispatch({type: 'AUTH', data: { result, token}});
    } catch(error) {
        console.log(error);
    }
    };
    
    const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In failed.")
    };
      
      
    return (
        <div>
        <Button variant="secondary" color='secondary' onClick={toggle}>{isSignUp ? 'Sign Up' : 'Login'}</Button>{' '}
        <Modal isOpen={modal} toggle={toggle} centered={true} {...args}>
            <ModalHeader style={{backgroundColor: '#949494'}} toggle={toggle}>{isSignUp ? 'Sign Up' : 'Login'}</ModalHeader>
            <form onSubmit={handleSubmit}>
            <ModalBody style={{backgroundColor: '#ff2643'}}>
            {isSignUp ? 
            <>
            <div class="mb-3">
                <label htmlFor="username" class="form-label">Name</label>
                <input onChange={handleChange} value={userInfo.name} name='username' type="text" class="form-control" id="name" placeholder="Jane Smith"/>
            </div>
            <div class="mb-3">
                <label htmlFor="password" class="form-label">Password</label>
                <input onChange={handleChange} value={userInfo.password} name='password' type="text" class="form-control" id="password"  placeholder="Password"/>
            </div>
            <div class="mb-3">
                <label htmlFor="email" class="form-label">Email address</label>
                <input onChange={handleChange} value={userInfo.email} name='email' type="email" class="form-control" id="email"  placeholder="youremail@gmail.com"/>
            </div>
            <GoogleLogin
                clientId=""
                buttonText="Sign up with Google"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
            </>
            :
            <>
              <div class="mb-3">
                <label htmlFor="email" class="form-label">Email address</label>
                <input onChange={handleChange} value={userInfo.email} name='email' type="email" class="form-control" id="email"  placeholder="youremail@gmail.com"/>
            </div>
            <div class="mb-3">
                <label htmlFor="password" class="form-label">Password</label>
                <input onChange={handleChange} value={userInfo.password} name='password' type="text" class="form-control" id="password"  placeholder="Password"/>
            </div>
            <GoogleLogin
                clientId=""
                buttonText="Sign Up with Google"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
            />
            </> }
            </ModalBody>
            <ModalFooter>
            <Button color="danger" type='submit' onClick={toggle}>
                Submit
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            <Button color="secondary" onClick={switchMode}>
                {isSignUp ? 'Already have an account? Login' : 'Click here to Sign Up'}
            </Button>
            </ModalFooter>
            </form>
        </Modal>
        </div>
    );
}

export default Auth;