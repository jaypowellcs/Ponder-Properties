import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function LoginForm(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
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
    });
};
  return (
    <div>
      <Button variant="secondary" color='light' onClick={toggle}>Login</Button>{' '}
      <Modal isOpen={modal} toggle={toggle} centered={true} {...args}>
        <ModalHeader style={{backgroundColor: '#949494'}} toggle={toggle}>Login</ModalHeader>
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