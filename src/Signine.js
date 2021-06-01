import React,{ Component } from 'react';
import { Link,Redirect} from 'react-router-dom';
import axios from 'axios';

export class Signine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            succes: false,
            loading:false,
            token:'',
            error : {}
        }
    }
    changeHandler =(e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        const email = this.state.email
        const password = this.state.password

        const data = {
            email,
            password
        }
        this.setState({loading:true})
        return axios.post('http://localhost:8000/api/login',data)
        .then(res => {
            this.setState({succes:true,error:{},loading:false})
            localStorage.setItem('token',res.data.data.token)
            console.log(res.data.data.token)
            console.log(res)
        })
        .catch(er => {
            this.setState({error:er,succes:false,loading:false})
            console.log(er)
            window.alert("Failed sign in")
        })
    }
render() {
    const {email , password} = this.state;
    
    return (
    <>
      {this.state.succes ? <Redirect to="/2" /> : this.state.error ? <p>bad credentials</p>: null}
      <div className="signine">
            <div className="container">
                <div className="logins">
                    <h1>SIGN<span>IN</span></h1>
                    <h6>Welcome to khadamny</h6>
                    <form className="form" onSubmit={this.submitHandler}>
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
     </>
    )
}
}

export default Signine
