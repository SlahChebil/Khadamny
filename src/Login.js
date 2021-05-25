import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Login() {
    const change= () =>{
        let a1=document.getElementsByClassName('employer')[0];
        let a2=document.getElementsByClassName('jobseeker')[0];
    }
    return (
        <div className="logink">
            <div className="container">
                <div className="logins">
                    <h1>SIGN<span>IN</span></h1>
                    <h6>Welcome to khadamny</h6>
                    <form className="form">
                        <div className="choses">
                            <ul className="chose">
                                <li className="choice" onClick={()=>change()} id="employer"><Link to="signine"><a href="#" id="link1">I'm an Employer</a></Link></li>
                                <li className="choice jobseeker" id="jobseeker"><a href="#" id="link2">I'm a Job Seeker</a></li>
                            </ul>
                        </div>
                        <input type="email" placeholder="Email Adress" id="email" required/><br/>
                        <input type="password" placeholder="Password" id="password" required/><br/>
                        <div className="submit">
                            <button type="submit" className="ghh">SIGN UP</button>
                        </div>
                    </form>
                    <p><a href="#" className="forget">Forget Password?</a></p>
                    <p className="para">New to khadamny?<Link to="createsp"><a href="#" className="seeker">Create a Job Seeker profile</a></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
