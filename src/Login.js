import React from 'react';
import './style.css';

function Login() {
    return (
        <div className="container">
            <div className="login">
                <h1>Login</h1>
                <form >
                    <label>Email</label>
                    <input type="email" placeholder="Last"/>
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                    <input type="button" value="Submit" />
                </form>
            </div>
            <p className="para">Not have an account? <a href="#">Sign up here</a></p>
        </div>
    )
}

export default Login
