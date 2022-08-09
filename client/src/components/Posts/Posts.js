import Post from "./Post/Post";
import { useSelector } from "react-redux";
//import { Col, Row, } from 'reactstrap';


const Posts = () => {
    const posts = useSelector((state) => state.posts )

    console.log(posts);
    return (
    
       !posts.length ? <div>No Posts</div> : (
        <div class='container-md mt-5'>
        <div class="row">
        {posts.map((post) => {
            return (
                <div className='col-lg-6' key={post.id}>
                    <Post post={post} />
                </div>
            );
        })}
        </div>
        </div>
       )
    );
}

export default Posts; 