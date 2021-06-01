import React from 'react';
import { Link } from 'react-router-dom';


function Createsp() {
    return (
        <div className="createsp">
            <div className="container">
                <div className="logins signup">
                    <h1>SIGN<span>UP</span></h1>
                    <h6>Welcome to khadamny</h6>
                    <form className="form">
                        <div className="choses">
                            <ul className="chose">
                                <li className="choice" id="employer"><Link to="createep"><a href="#" id="link1">I'm an Employer</a></Link></li>
                                <li className="choice jobseeker" id="jobseeker"><a href="#" id="link2">I'm a Job Seeker</a></li>
                            </ul>
                        </div>
                        <input type="email" placeholder="Email Adress" id="email" required/><br/>
                        <input type="password" placeholder="Password" id="password" required/><br/>
                        <input type="password" name="c_password" id="c_password" placeholder="Confirm password" required/>
                        <div className="submit">
                            <button type="submit" className="ghh">SIGN UP</button>
                        </div>
                    </form>
                    <p className="para">You have an account khadamny?<Link to="/signine"><a href="#" className="seeker">Sign IN</a></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Createsp;
