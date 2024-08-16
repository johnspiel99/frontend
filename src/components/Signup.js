import React, { useState } from 'react';
import './Signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setIsSubmitted(true);
    };

    return (
        <div className="Signup">
            {!isSubmitted ? (
                <>
                    <h1>Sign up</h1>
                    <div id="status" className="status">&nbsp;</div>
                    <form className="form" id="signup" method="post" name="signup" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            type="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="submit" value="Sign up" />
                        <input id="recaptchaResponse" name="recaptcha_response" type="hidden" />
                    </form>
                    <div className="terms">
                        By creating an account you agree to our
                        <a>Terms of Service</a>.
                    </div>
                    <p className="login-signup">Already have an account? <a href="/login">Log in</a></p>
                </>
            ) : (
                <div className="page" id="result-page">
                    <div className="email-verify">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path d="M20 4H4C2.9 4 2 4.9 2 6v12C2 19.1 2.9 20 4 20h16C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4zM18.3 6L12 10.8 5.7 6H18.3zM4 6L4 6V6H4zM4 18L4 7.2 12 13.3l8-6L20 18 4 18z" /></svg>
                        <p>We’ve sent an email to <strong id="successEmail">{email}</strong>. Please check your inbox and follow the instructions.</p>
                        <p className="login-signup">Didn't get an email? There may already be an account associated with this email address. Contact <a href="mailto:support@simplenote.com">support@simplenote.com</a> for help.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Signup;
