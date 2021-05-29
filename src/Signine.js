import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Signine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }
    changeHandler =(e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('url',this.state).then(res => {console.log(res)}).catch(er => {console.log(er)})
    }
render() {
    const {email , password} = this.state;
    return (
        <div className="signine">
            <div className="container">
                <div className="logins">
                    <h1>SIGN<span>IN</span></h1>
                    <h6>Welcome to khadamny</h6>
                    <form className="form" onSubmit={this.submitHandler}>
                        <div className="choses">
                            <ul className="chose">
                                <li className="choice employer" id="employer"><a href="#" id="link1">I'm an Employer</a></li>
                                <li className="choice" id="jobseeker"><Link to="login"><a href="#" id="link2">I'm a Job Seeker</a></Link></li>
                            </ul>
                        </div>
                        <input type="email" placeholder="Email Adress" id="email" name="email" value={email} onChange={this.changeHandler}required/><br/>
                        <input type="password" placeholder="Password" id="password" name="password" value={password} onChange={this.changeHandler}required/><br/>
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
}

export default Signine
