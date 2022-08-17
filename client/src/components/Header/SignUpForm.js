import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { GoogleLogin } from 'react-google-login';
import {useDispatch} from 'react-redux';

function LoginForm(args) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

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
      <Button variant="secondary" color='secondary' onClick={toggle}>Sign Up</Button>{' '}
      <Modal isOpen={modal} toggle={toggle} centered={true} {...args}>
        <ModalHeader style={{backgroundColor: '#949494'}} toggle={toggle}>Sign Up</ModalHeader>
        <form onSubmit={handleSubmit}>
        <ModalBody style={{backgroundColor: '#ff2643'}}>
        
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
           clientId="892062908204-blggvrgjnn2fuaipp8dpo6khd95brsja.apps.googleusercontent.com"
           buttonText="Login"
           onSuccess={googleSuccess}
           onFailure={googleFailure}
           cookiePolicy={'single_host_origin'}
           ></GoogleLogin>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" type='submit' onClick={toggle}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default LoginForm; 