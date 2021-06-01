import React, { Component , useState , useEffect }from 'react';
import axios from 'axios';

import './style.css';
import BusinessIcon from '@material-ui/icons/Business';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WorkIcon from '@material-ui/icons/Work';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export class FindJobs extends Component{
    constructor(props) {
        super(props)
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            categorie:'',
            city:'',
            posts:[],
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
        return axios.post('http://localhost:8000/api/posts/search',data)
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

    componentDidMount() {
        return axios.get('http://localhost:8000/api/accueil')
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
    
    render() {
        const popup = () => {
            let a = document.querySelector(".popup");
            a.style.display= "flex";
        }
        const close = () => {
            let a = document.querySelector(".popup");
            a.style.display= "none";
        }
        const {city, categorie} = this.state;
        return(
        <div className="findjobs" >
            <div className="container">
                <div className="recherche">
                    <form className="formrech" onSubmit={this.submitHandler}>
                        <input type="text" className="inputsrech" placeholder="Job title, Keywords" id="job" name="categorie" value={categorie} onChange={this.changeHandler}/>
                        <input type="text" className="inputsrech" placeholder="City, state, zip code" id="area" name="city" value={city} onChange={this.changeHandler}/>
                        <button id="btnrech" type="submit">FIND JOBS</button>
                    </form>
                </div>
                <div className="post" onClick={()=>popup()}>   
                        {this.state.posts.map((post)=>(
                            <div className="contenu">
                                <BusinessIcon className="img"></BusinessIcon>
                                <h4>{post.title}</h4>
                                <p>{post.name}</p>
                                <p>{post.city}</p>
                                <ul>
                                    <li><MonetizationOnIcon className="icon"></MonetizationOnIcon>{post.price}</li>
                                    <li><WorkIcon className="icon"></WorkIcon>{post.categorie}</li>
                                </ul>
                                <div className="foter">
                                    <p className="description same">{post.detail}</p>
                                    <button className="apply same" onClick={()=>popup()}>Click Apply</button>
                                </div>
                            </div>
                        ))}       
                </div>
                <div className="popup" id="popup">
                        <div className="popup_content">
                            <div className="head">
                                <h3>Contact Info</h3>
                                <CloseRoundedIcon className="close" onClick={()=>close()}></CloseRoundedIcon>
                            </div>
                            <div className="inputs">
                                <input type="text" placeholder="sleh.chebil.sc@gmail.com"/>
                                <input type="text" placeholder="Please add a Phone Number" />
                            </div>
                            <button className="Save">Save</button>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default FindJobs;
