import React from 'react';
import { Link } from 'react-router-dom';


function Signine() {
    return (
        <div className="signine">
            <div className="container">
                <div className="logins">
                    <h1>SIGN<span>IN</span></h1>
                    <h6>Welcome to khadamny</h6>
                    <form className="form">
                        <div className="choses">
                            <ul className="chose">
                                <li className="choice employer" id="employer"><a href="#" id="link1">I'm an Employer</a></li>
                                <li className="choice" id="jobseeker"><Link to="login"><a href="#" id="link2">I'm a Job Seeker</a></Link></li>
                            </ul>
                        </div>
                        <input type="email" placeholder="Email Adress" id="email" required/><br/>
                        <input type="password" placeholder="Password" id="password" required/><br/>
                        <div className="submit">
                            <button type="submit" className="ghh">SIGN UP</button>
                        </div>
                    </form>
                    <p><a href="#" className="forget">Forget Password?</a></p>
                    <p className="para">New to khadamny?<Link to="createsp"><Link to="createep"><a href="#" className="seeker">Create an Employer profile</a></Link></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signine
