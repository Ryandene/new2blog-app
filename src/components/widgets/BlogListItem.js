import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteBlog } from '../../Redux/Actions/BlogActions';

const BlogListItem = ({ blog }) => {
    const navigate = useNavigate();

    // navigates to update blog page with selected blog id
    const handleUpdateClick = () => {
        navigate(`/updateBlog/${blog.id}`);
    };

    const handleViewPost = () => {
        handleScrollToTop();
        navigate(`/blogDetails/${blog.id}`);
    };

    // create dispatch instance to use blog actions
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteBlog(blog.id));
    };

    const handleScrollToTop = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            }
        );
    }

    return (
        <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p><strong>{blog.author}</strong></p>
            <p>{blog.content}</p>
            <p>Date: {blog.date.toDateString()}</p>
            <button
                className="btn btn-success"
                onClick={handleViewPost}>
                View
            </button>
            <span >  </span>
            <button
                className="btn btn-primary"
                onClick={handleUpdateClick}>
                Edit
            </button>
            <span >  </span>
            <button
                className="btn btn-danger"
                onClick={handleDelete}>
                Delete Post
            </button>
            <br /><br />
        </li>
    );
}

export default BlogListItem;
