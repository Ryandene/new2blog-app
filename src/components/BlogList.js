import React from 'react';
import { useSelector } from 'react-redux';

import BlogListItem from './widgets/BlogListItem';

import 'bootstrap/dist/css/bootstrap.min.css';

const BlogList = () => {
    // Get blogList from Redux store
    const blogList = useSelector(state => state.blog.blogList);

    return (
        <div className="container mt-5">
            <h2>Blog List</h2>
            <ul>
                {blogList.map(blog => (
                    <BlogListItem key={blog.id} blog={blog} />
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
