import React, { Component } from 'react';
import './style.css';
import Post from './Post';
import axios from 'axios';
import Headerlogged from './Headerlogged';
import {Link,useLocation,useParams,Redirect} from "react-router-dom";

export class Edit extends Component{
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


    componentDidMount(){
        console.log('xsxx')
       const token=localStorage.getItem('token')
       const id=localStorage.getItem('id')
        axios.get(`http://localhost:8000/api/posts/edit/${id}`,{headers: {"Authorization" : `Bearer ${token}`}})
        .then(res => {
            console.log(res)
            const title = res.data.data[0].title;
            const city = res.data.data[0].city;
            const price = res.data.data[0].price;
            const detail = res.data.data[0].detail;
            const categorie = res.data.data[0].categorie;



            this.setState({
                title,
                city,
                categorie,
                price,
                detail
            })
            console.log(this.state.title)
        })
        .catch(er => {
            this.setState({error:er,succes:false,loading:false})
            console.log(er)
        })
    }

    changeHandler =(e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({loading:true})
        this.setState({succes:true,error:{},loading:false})
        console.log(this.state)
        const token=localStorage.getItem('token')
        const id=localStorage.getItem('id')
        axios.put(`http://localhost:8000/api/posts/update/${id}`,this.state,{headers: {"Authorization" : `Bearer ${token}`}})
        .then(res => {
            console.log(res)
            this.setState({succes:true,error:{},loading:false})
        })
        .catch(er => {
            this.setState({error:er,succes:false,loading:false})
            console.log(er)
            window.alert("Failed edit")
        })
        localStorage.removeItem('id')
    }
    

    render(){
    const {price , city , detail ,categorie ,title} = this.state;

        return (
            <>
                  {this.state.succes ? <Redirect to="/profile" /> : <Redirect to="/edit" /> }

            <div className="Edit">
                <div className="container">
                    <div className="postJob">
                        <div className="container">
                            <h1>EDIT<span>JOB</span></h1>
                            <h6>Welcome to khadamny</h6>
                            <form className="form" onSubmit={this.submitHandler}>
                            <input type="text" name="title" placeholder={this.state.title} value={title} onChange={this.changeHandler}/>
                            <input type="text" placeholder={this.state.city} id="password" name="city" value={city} onChange={this.changeHandler} required/><br/>
                            <input type="text" name="price" id="price" placeholder={this.state.price} value={price} onChange={this.changeHandler}required/>
                            <input type="text" name="categorie" placeholder={this.state.categorie} value={categorie} onChange={this.changeHandler}/>
                            <textarea type="text" placeholder={this.state.detail} id="detail" name="detail" value={detail} onChange={this.changeHandler} required /><br/>
                            <div className="submit">
                                <button type="submit" className="ghh">EDIT JOB</button>
                            </div>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
    
}

export default Edit;