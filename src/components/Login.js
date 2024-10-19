import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const mockUser = {
    email: 'test@example.com',
    password: 'password123',
};

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const navigate = useNavigate(); // Use useNavigate for redirection

    // Handle user login
    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (email === mockUser.email && password === mockUser.password) {
            setSuccessMessage('Login successful!');
            localStorage.setItem('userId', 'mockUserId');
            navigate('/home'); // Redirect to Home page after successful login
        } else {
            setErrorMessage('Invalid email or password');
        }
    };

    // Handle password reset
    const handleForgotPassword = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (forgotPasswordEmail === mockUser.email) {
            setSuccessMessage('Password reset link sent!');
            setForgotPasswordEmail('');
            setShowForgotPassword(false);
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
                                type={showPassword ? 'text' : 'password'}
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
