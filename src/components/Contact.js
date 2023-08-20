import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form data:', { name, email });
    };

    return (
        <div className="container mt-5">
            <h2>Contact Us</h2>
            <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Send Inquiry</button>
            </form>
        </div>
    );
};

export default Contact;