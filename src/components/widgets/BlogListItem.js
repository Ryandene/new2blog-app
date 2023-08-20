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

    // create dispatch instance to use blog actions
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteBlog(blog.id));
    };

    return (
        <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
            <p>{blog.content}</p>
            <p>Date: {blog.date.toDateString()}</p>
            <button
                className="btn btn-primary"
                onClick={handleUpdateClick}>
                Edit
            </button>
            <button
                className="btn btn-danger"
                onClick={handleDelete}>
                Delete Post
            </button>

        </li>
    );
}

export default BlogListItem;
