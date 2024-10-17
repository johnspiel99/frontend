import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Import eye icons
import './Login.css'; // Import the CSS file for styling

const mockUser = {
    email: 'test@example.com',
    password: 'password123', // Example password
};

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Handle user login
    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error message

        if (email === mockUser.email && password === mockUser.password) {
            // Handle successful login
            setSuccessMessage('Login successful!');
            localStorage.setItem('userId', 'mockUserId'); // Mock user ID
        } else {
            setErrorMessage('Invalid email or password');
        }
    };

    // Handle password reset
    const handleForgotPassword = (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error message
        setSuccessMessage(''); // Clear previous success message

        // Simulate sending a password reset link
        if (forgotPasswordEmail === mockUser.email) {
            setSuccessMessage('Password reset link sent!');
            setForgotPasswordEmail(''); // Clear input
            setShowForgotPassword(false); // Hide the forgot password form
        } else {
            setErrorMessage('Email not found');
        }
    };

    return (
        <div className="login-container">
            {!showForgotPassword ? (
                <div className="login-form">
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
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
                        <div style={{ position: 'relative' }}>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'} // Toggle visibility
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                }}
                            >
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        <button type="submit">Login</button>
                    </form>
                    <p className="forgot-password-link" onClick={() => setShowForgotPassword(true)}>
                        Forgot Password?
                    </p>
                    <p className="signup-link">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                </div>
            ) : (
                <div className="forgot-password-form">
                    <h2>Forgot Password</h2>
                    <form onSubmit={handleForgotPassword}>
                        <label htmlFor="forgot-email">Email</label>
                        <input
                            id="forgot-email"
                            name="forgot-email"
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={forgotPasswordEmail}
                            onChange={(e) => setForgotPasswordEmail(e.target.value)}
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        <button type="submit">Send Reset Link</button>
                        <p className="cancel-link" onClick={() => setShowForgotPassword(false)}>
                            Cancel
                        </p>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Login;
