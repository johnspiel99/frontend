import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setIsSubmitted(true);
    };

    return (
        <div className="login-container">
            {!isSubmitted ? (
                <div className="login-form">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Login</button>
                    </form>
                    <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
            ) : (
                <div className="login-success">
                    <p>You have successfully logged in!</p>
                    <p><a href="/home">Go to Home</a></p>
                </div>
            )}
        </div>
    );
}

export default Login;
