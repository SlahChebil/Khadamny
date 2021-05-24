import React from 'react';
import './style.css';

function Login() {
    return (
        <div className="logink">
            <div className="container">
                <div className="logins">
                    <h1>SIGN<span>IN</span></h1>
                    <h6>Welcome to khadamny</h6>
                    <form className="form">
                        <div className="choses">
                            <ul className="chose">
                                <li className="choice"><a href="#">I'm an Employer</a></li>
                                <li className="choice"><a href="#">I'm a Job Seeker</a></li>
                            </ul>
                        </div>
                        <input type="email" placeholder="Email Adress" id="email"/><br/>
                        <input type="password" placeholder="Password" id="password"/><br/>
                        <div className="submit">
                            <button type="submit" className="ghh">SIGN UP</button>
                        </div>
                    </form>
                    <p><a href="#" className="forget">Forget Password?</a></p>
                    <p className="para">New to khadamny?<a href="#" className="seeker">Create a Job Seeker profile</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login
