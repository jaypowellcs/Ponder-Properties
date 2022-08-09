import { useState } from "react";
//import posts from "../../reducers/posts";
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';


const Form = () => {

    const [postData, setPostData] = useState({
        city: '',
        state: '',
        bedrooms: '',
        bathrooms: '',
        sqft: '',
        purchasePrice: '',
        file: '',
        message: '',
    });

   

    const dispatch = useDispatch();
    const handleChange = (event) => {
        setPostData({ ...postData, [event.target.name]: event.target.value});
      };
    
    const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(postData)
    dispatch(createPost(postData));
    setPostData({  
        city: '',
        state: '',
        bedrooms: '',
        bathrooms: '',
        sqft: '',
        purchasePrice: '',
        file: '',
        message: '',
        });
    };

    return (
        
            <div class="card text-bg-danger mb-3">
                <div class="card-body">
                    <h3 className='text-center'>Upload your property</h3>
                    <form class="row g-3" onSubmit={handleSubmit}>
                        <div class="col-md-4 mb-3">
                            <label htmlFor="bedrooms" class="form-label">Bedrooms</label>
                            <select onChange={handleChange} value={postData.bedrooms}class="form-select form-select-sm" aria-label=".form-select-sm example" name='bedrooms'>
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                                <option value="6">Six</option>
                                <option value="7">Seven</option>
                                <option value="8">Eight</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label htmlFor="bathrooms" class="form-label">Bathrooms</label>
                            <select onChange={handleChange} value={postData.bathrooms}class="form-select form-select-sm" aria-label=".form-select-sm example" name='bathrooms'>
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                                <option value="6">Six</option>
                                <option value="7">Seven</option>
                                <option value="8">Eight</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label htmlFor="sqft" class="form-label">Square Feet</label>
                            <input onChange={handleChange} value={postData.sqft} type="number" name='sqft' class="form-control" id="sqft" placeholder="Sq Ft"/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label htmlFor="city" class="form-label">City</label>
                            <input onChange={handleChange} value={postData.city} type="text" name='city' class="form-control" id="city" placeholder="Dallas" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label htmlFor="state" class="form-label">State</label>
                            <input onChange={handleChange} value={postData.state}type="text" name='state' class="form-control" id="state" placeholder="Texas"/>
                        </div>

                        
                       
                        <label htmlFor="purchasePrice" class="form-label">Purchase Price</label>
                        <div class="input-group mb-3">
                        <span class="input-group-text">$</span>
                        <input onChange={handleChange} value={postData.purchasePrice} type="number" name='purchasePrice' class="form-control" id="purchasePrice" placeholder="500,000"/>
                        </div>
 
                        <div class="mb-3">
                        <label htmlFor="formFile" class="form-label">Upload Photo of your Property</label>
                        <input 
                        onChange={(event) => {setPostData({ ...postData, [event.target.name[0]]:event.target.value[0]})}}
                        value={postData.files} class="form-control" type="file" name='file' id="formFile"/>
                        </div>
        
                        <div class="mb-3">
                            <label htmlFor="message" class="form-label">Details about your deal</label>
                            <textarea onChange={handleChange} value={postData.message} class="form-control" type='text' name='message' id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-light">Submit</button>
                    </form>
                </div>
            </div>
        
    );
};

export default Form; 