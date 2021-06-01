import React, {Component} from 'react';
import { Link,Redirect} from 'react-router-dom';
import axios from 'axios';


export class PostJob extends Component{
    constructor(props) {
        super(props)
        this.state = {
            categorie: '',
            price: '',
            detail: '',
            title: '',
            succes: false,
            loading:false,
            city:''
        }
    }
    changeHandler =(e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({loading:true})
        console.log(this.state)
        const token=localStorage.getItem('token')
        axios.post('http://localhost:8000/api/posts/store',this.state,{headers: {"Authorization" : `Bearer ${token}`}})
        .then(res => {
            console.log(res)
            this.setState({succes:true,error:{},loading:false})
        })
        .catch(er => {
            this.setState({error:er,succes:false,loading:false})
            console.log(er)
            window.alert("Failed post job")
        })
    }
    render(){
        const {price , city , detail ,categorie ,title} = this.state;
        return (
            <>
            {this.state.succes ? <Redirect to="/findjobsprofile" /> : this.state.error ? <p>bad credentials</p>: null}
            <div className="postJob">
                <div className="container">
                    <h1>POST<span>Job</span></h1>
                    <h6>Welcome to khadamny</h6>
                    <form className="form" onSubmit={this.submitHandler}>
                        <input type="text" name="title" placeholder="Title" value={title} onChange={this.changeHandler}/>
                        <input type="text" placeholder="City" id="password" name="city" value={city} onChange={this.changeHandler} required/><br/>
                        <input type="text" name="price" id="price" placeholder="Salary" value={price} onChange={this.changeHandler}required/>
                        <input type="text" name="categorie" placeholder="Categorie" value={categorie} onChange={this.changeHandler}/>
                        <textarea type="text" placeholder="details" id="detail" name="detail" value={detail} onChange={this.changeHandler} required /><br/>
                        <div className="submit">
                            <button type="submit" className="ghh">POST JOB</button>
                        </div>
                    </form>
                </div>
             </div>
             </>
        )
    }
}

export default PostJob;
