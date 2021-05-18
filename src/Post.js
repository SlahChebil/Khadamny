import React, { Component } from 'react';
import axios from 'axios';

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
        const {name, email , password , c_password ,phone ,city} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" value={name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" value={email} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="password" value={password} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="password" value={c_password} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" value={phone} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" value={city} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Post;
