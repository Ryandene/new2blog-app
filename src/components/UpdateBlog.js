import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { updateBlog } from '../Redux/Actions/BlogActions';

import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateBlog = () => {
    // const blogId = match.params.id;
    const { blogId } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const blogList = useSelector(state => state.blog.blogList);

    const [blog, handleBlogUpdates] = useState({});

    useEffect(() => {
        // check whether there is a blog object by params id exist
        const selectedBlog = blogList.find(blog => blog.id === blogId);
        // console.log(selectedBlog);
        console.log('selected Blog:', blogId);

        // if exists load selected blog into local state variable using state update function
        if (selectedBlog) {
            handleBlogUpdates(selectedBlog);
        }
    }, [blogList, blogId]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // set current date value to blog object
        const updatedBlog = {
            ...blog,
            date: new Date(),
        };

        dispatch(updateBlog(updatedBlog)); // Dispatch the updateBlog action

        navigate('/blogList'); // Redirect back to the blog list after updating
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleBlogUpdates(prevBlog => ({ ...prevBlog, [name]: value }));
    };

    return (
        <div className="container mt-5">
            <h2>Update Blog</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={blog.title || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={blog.author || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        id="content"
                        name="content"
                        value={blog.content || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default UpdateBlog;
