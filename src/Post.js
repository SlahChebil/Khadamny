import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';


export class Post extends Component {
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
        axios.post('url',this.state).then(res => {console.log(res)}).catch(er => {console.log(er)})
    }
    render() {
        const {name, email , password , c_password ,phone ,city} = this.state;
        return (
            <div className="container">
                <div className="SignIn">
                    <div className="signinpanel">
                        <h1>Sign In</h1>
                        <form onSubmit={this.submitHandler}>
                            <label>Name of the Company</label>
                            <input type="text" name="name" value={name} onChange={this.changeHandler}/>
                            <label>Phone number</label>
                            <input type="text" name="phone" value={phone} onChange={this.changeHandler}/>
                            <label>City</label>
                            <input type="text" name="city" value={city} onChange={this.changeHandler}/>
                            <label>Email</label>
                            <input type="text" name="email"value={email} onChange={this.changeHandler}/>
                            <label>Password</label>
                            <input type="password" name="password"value={password} onChange={this.changeHandler}/>
                            <label>Password (again)</label>
                            <input type="password" name="c_password" value={c_password} onChange={this.changeHandler}/>
                            <input type="button" value="Submit"/>
                        </form>
                        <p>By clicking the Sign In button,you agree to our <br/>
                        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
                        </p>
                        <p>Already have an acocunt?<Link to="./login"><a href="#">Login here</a></Link></p>
                    </div>
                    <div className="loginLinks"></div>
                </div>
            </div>
        )
    }
}

export default Post;
