import React from 'react';
import { Link } from 'react-router-dom';


function Createep() {
    return (
        <div className="createep">
            <div className="container">
                <div className="logins createep">
                    <h1>SIGN<span>UP</span></h1>
                    <h6>Welcome to khadamny</h6>
                    <form className="form">
                        <div className="choses">
                            <ul className="chose">
                                <li className="choice employer" id="employer"><Link to="createep"><a href="#" id="link1">I'm an Employer</a></Link></li>
                                <li className="choice " id="jobseeker"><Link to="createsp"><a href="#" id="link2">I'm a Job Seeker</a></Link></li>
                            </ul>
                        </div>
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" placeholder="Email Adress" id="email" required/><br/>
                        <input type="password" placeholder="Password" id="password" required/><br/>
                        <input type="password" name="c_password" id="c_password" placeholder="Confirm password" required/>
                        <input type="tel" name="phone"placeholder="Phone number" pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"/>
                        <div className="submit">
                            <button type="submit" className="ghh">SIGN UP</button>
                        </div>
                    </form>
                    <p className="para">You have an account khadamny?<Link to="login"><a href="#" className="seeker">Sign IN</a></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Createep
