import React, {Component} from 'react';
import axios from 'axios';


export class PostJob extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            categorie: '',
            price: '',
            detail: '',
            title: '',
            city:'',
            token:''
        }
    }
    changeHandler =(e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.state.token=localStorage.getItem('token')
        axios.post('url',this.state).then(res => {console.log(res)}).catch(er => {console.log(er)})
    }
    render(){
        const {name, price , city , detail ,categorie ,title} = this.state;
        return (
            <div className="postJob">
                <div className="container">
                    <h1>POST<span>Job</span></h1>
                    <h6>Welcome to khadamny</h6>
                    <form className="form" onSubmit={this.submitHandler}>
                        <input type="text" name="title" placeholder="Title" value={title} onChange={this.changeHandler}/>
                        <input type="text" placeholder="Name of the job" id="email" name="name" value={name} onChange={this.changeHandler}required/><br/>
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
        )
    }
}

export default PostJob;
