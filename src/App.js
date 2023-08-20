import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';
import UpdateBlog from './components/UpdateBlog';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">My Blog</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogList">View Posts</Link>
              </li>
            </ul>
            <Link className="btn btn-primary" to="/createBlog">Write Now</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/blogList" element={<BlogList />} />
        <Route path="/updateBlog/:blogId" element={<UpdateBlog />} />

        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;