import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faHeart } from '@fortawesome/free-solid-svg-icons'
import { likePost, deletePost } from '../../../actions/posts';
import { useDispatch } from 'react-redux';


const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    return(
        <div class="card border-danger mb-3">
            <div class="card-header bg-transparent border-danger text-center"><h3>{post.city}, {post.state}</h3></div>
            <div class="card-body text-danger">
            <h5 class="card-title text-center">House Details</h5>
            <img src={post.file} class="card-img" alt="..."></img>
            <ul class="list-group list-group-flush">
                <div class='row'>
                    <div class='col-3'>
                <li class="list-group-item">Bedrooms: {post.bedrooms}</li>
                    </div>
                    <div class='col-3'>
                <li class="list-group-item">Bathrooms: {post.bathrooms}</li>
                    </div>
                    <div class='col-3'>
                <li class="list-group-item">Sq Ft: {post.sqft}</li>
                    </div>
                    <div class='col-3'>
                <li class="list-group-item">Price: ${post.purchasePrice}</li>
                    </div>
                </div>
            </ul>
            <div class="card-body text-danger">
            <div class='row'>
                    <div class='col-12'>
                        <div class='text-center'><u>Deal description</u></div>
                        <p class="card-text text-center">{post.message}</p>
                     </div>
            </div>
            </div>
        </div>
        <div class="card-footer bg-transparent border-danger">
            <button onClick={() => dispatch(likePost(post._id))}><FontAwesomeIcon icon={faHeart}/> Like {post.likeCount}</button>
            <button onClick={() => dispatch(deletePost(post._id))}><FontAwesomeIcon icon={faDeleteLeft} /></button>
        </div>
        </div>
       
    );
};

export default Post; 