import React, { Component , useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import FindJobs from './FindJobs';

export class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            categorie:'',
            city:'',
            fuck:false,
            posts:[]
        }
    }
    changeHandler =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler =(e) => {
        e.preventDefault()

        const city = this.state.city
        const categorie = this.state.categorie

        const data = {
            categorie,
            city
        }
        return axios.post('url',data)
        .then(res => {
            console.log(res);
            const posts = res.data.data;
            this.setState({
                posts
            })
        })
        .catch(er => {
            console.log(er);
        })
    }


    render(){
        const {city, categorie} = this.state;
        return(
            <>
            <div className="content">
                <div className="leftside">
                    <h1>Find the <strong>Right</strong> Job</h1><br/>
                    <form className="form">
                        <input type="text" className="inputs" placeholder="Job title, Keywords" id="job" name="categorie" value={categorie} onChange={this.changeHandler}/>
                        <input type="text" className="inputs" placeholder="City, state, zip code" id="area" name="city" value={city} onChange={this.changeHandler}/>
                        <Link to='/findjobsprofile'>
                            <button id="btn" type="submit">Find Job</button>
                        </Link>            
                    </form>
                    <p><q>All our dreams can come true <br/>if we have the courage to pursue<br/>them.</q><small>—Walt Disney</small></p>
                </div>
            </div>
            </>
        )
    }
}

export default Home;
