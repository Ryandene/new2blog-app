import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBlog } from '../Redux/Actions/BlogActions'

import BlogModel from '../models/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateBlog = () => {

    // state variable to maintain blog input
    const [blog, setBlog] = useState(BlogModel);

    // create dispatch instance to use blog actions
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // set current date value to blog object
        const newBlog = {
            ...blog,
            id: uuidv4(),
            date: new Date(),
        };

        // call the add method to add blog into list
        dispatch(addBlog(newBlog));

        //clear the form
        setBlog(BlogModel);

        console.log('Submitted Blog:', newBlog);
    };

    return (
        <div className="container mt-5">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={blog.title}
                        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        value={blog.author}
                        onChange={(e) => setBlog({ ...blog, author: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows="10"
                        value={blog.content}
                        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <br /><br />
            </form>
        </div>
    );
};

export default CreateBlog;