import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function SignIn() {
    return (
        <div className="container">
            <div className="SignIn">
                <h1>Sign In</h1>
                <form>
                    <label>Name of the Company</label>
                    <input type="text" placeholder="Name" name="username"/>
                    <label>Phone number</label>
                    <input type="text" placeholder="Phone number"/>
                    <label>City</label>
                    <input type="text" placeholder="City"/>
                    <label>Email</label>
                    <input type="email" placeholder="Last"/>
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                    <input type="button" value="Submit"/>
                </form>
                <p>By clicking the Sign In button,you agree to our <br/>
                <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
                </p>
                <p>Already have an acocunt?<Link to="./login"><a href="#">Login here</a></Link></p>
            </div>
        </div>
    )
}

export default SignIn
