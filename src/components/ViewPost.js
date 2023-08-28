import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const ViewPost = () => {
    const { blogId } = useParams();
    const blogList = useSelector(state => state.blog.blogList);

    const blog = blogList.find(blog => blog.id === blogId);

    console.log('selected Blog:', blogId);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/bloglist');
    };

    return (
        <div className="container mt-5">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p><strong>Published on:</strong> {blog.date.toDateString()}</p>
            <p><strong>Author:</strong> {blog.author}</p>
            <br /><br />
            <button
                className="btn btn-primary"
                onClick={handleBack}>
                Go to feed
            </button>


        </div>
    );
}

export default ViewPost;
