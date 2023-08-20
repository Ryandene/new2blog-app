import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container mt-5">
            <h1>Welcome to My Blog!</h1>
            <p>This is the place to read and write amazing blog posts.</p>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Read Blog Posts</h5>
                            <p className="card-text">Explore the latest blog posts from our talented authors.</p>
                            <Link to="/blogList" className="btn btn-primary">View Posts</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Write a Blog Post</h5>
                            <p className="card-text">Share your thoughts and insights with our community.</p>
                            <Link to="/createBlog" className="btn btn-success">Write Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact Us</h5>
                            <p className="card-text">Have questions or feedback? Get in touch with us.</p>
                            <Link to="/contact" className="btn btn-info">Contact Form</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;