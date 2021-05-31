import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

export class Createep extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            c_password: '',
            phone: '',
            city:'',
        }
    }
    changeHandler =(e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8000/api/register',this.state).then(res => {console.log(res)}).catch(er => {console.log(er)})
    }


render(){
    const {name, email , password , c_password ,phone ,city} = this.state;
    return (
        <div className="createep" >
            <div className="container">
                <div className="logins createep" style={{height:"680px"}}>
                    <h1>SIGN<span>UP</span></h1>
                    <h6>Welcome to khadamny</h6>
                    <form className="form" onSubmit={this.submitHandler}>
                        <div className="choses">
                            <ul className="chose">
                                <li className="choice employer" id="employer"><Link to="createep"><a href="#" id="link1">I'm an Employer</a></Link></li>
                                <li className="choice " id="jobseeker"><Link to="createsp"><a href="#" id="link2">I'm a Job Seeker</a></Link></li>
                            </ul>
                        </div>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={this.changeHandler}/>
                        <input type="email" placeholder="Email Adress" id="email" name="email" value={email} onChange={this.changeHandler}required/><br/>
                        <input type="password" placeholder="Password" id="password" name="password" value={password} onChange={this.changeHandler} required/><br/>
                        <input type="password" name="c_password" id="c_password" placeholder="Confirm password" value={c_password} onChange={this.changeHandler}required/>
                        <input type="tel" name="phone" placeholder="Phone number" value={phone} onChange={this.changeHandler}/>
                        <input type="text" placeholder="city" id="city" name="city" value={city} onChange={this.changeHandler} required /><br/>
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
}

export default Createep;
