import { useState } from "react";
//import posts from "../../reducers/posts";
//import { useDispatch } from 'react-redux';
//import { createPost } from '../../actions/posts';


const EmailForm = () => {

    
    const [userInfo, setUserInfo] = useState({
        username: '',
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
        email: '', 
        });
    };

    return(
        <div class="card text-bg-danger mb-3">
            <div class="card-body">
                <h2 class='text-center'>
                    Get all the latest articles and information via email:
                </h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label htmlFor="username" class="form-label">Name</label>
                    <input onChange={handleChange} value={userInfo.name} name='username' type="text" class="form-control" id="name" placeholder="Jane Smith"/>
                </div>
                <div class="mb-3">
                    <label htmlFor="email" class="form-label">Email address</label>
                    <input onChange={handleChange} value={userInfo.email} name='email' type="email" class="form-control" id="email"  placeholder="youremail@gmail.com"/>
                </div>
                <button type="submit" class="btn btn-light">Sign-Up</button>
                </form>
            </div>
        </div>
    );
}

export default EmailForm; 