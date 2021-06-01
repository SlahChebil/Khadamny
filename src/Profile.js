import React, {Component} from 'react';
import './style.css';
import { Link,Redirect} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BusinessIcon from '@material-ui/icons/Business';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WorkIcon from '@material-ui/icons/Work';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RoomIcon from '@material-ui/icons/Room';
import axios from 'axios';
import Home from './Home';

export class Profile extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            location:'',
            email:'',
            phone:'',
            posts:[]
        }
    }
    /*submitHandler = (e,id) => {
        console.log(id)
        const token=localStorage.getItem('token')
        axios.delete(`http://localhost:8000/api/posts/delete/${id}`,{headers: {"Authorization" : `Bearer ${token}`}})
        .then(res => {
            console.log(res)
        })
        .catch(er => {
            console.log(er)
        })
    }*/
    getToken(){
        return localStorage.getItem('token');
    }
    componentDidMount() {
        const token=localStorage.getItem('token')
        return axios.get('http://localhost:8000/api/profile',{headers: {"Authorization" : `Bearer ${token}`}})
        .then(res => {
            console.log(res);
            const name = res.data.data.name;
            const city = res.data.data.city;
            const email = res.data.data.email;
            const phone = res.data.data.phone;
            const posts = res.data.data.posts;


            this.setState({
                name,
                city,
                email,
                phone,
                posts,
            })
        })
        .catch(er => {
            console.log(er);
        })
    }
    

    render(){
        
    return (
        <div className="profile">
            <div className="container">
                <div className="info">
                    <AccountCircleIcon className="icon"></AccountCircleIcon>
                    <span>{this.state.name}</span>
                </div>
                <div className="contact">
                    <div className="head">
                        <h4>Contact Information</h4>
                        <EditIcon className="edit"></EditIcon>
                    </div>
                    <div className="email">
                        <EmailIcon className="email"></EmailIcon>
                        <h3>{this.state.email}</h3>
                    </div>
                    <div className="phones">
                        <div className="link">
                            <PhoneIcon className="phone"></PhoneIcon>
                            <a href="#" className="phonen" id="phonen">{this.state.phone}</a>
                        </div>
                        <div className="link">
                            <RoomIcon className="phone"></RoomIcon>
                            <a href="#" className="phonen" id="phonen">{this.state.city}</a>
                        </div>
                    </div>
                </div>
                <div className="upload">
                    <div className="head">
                        <h4>Job Posts</h4>
                    </div>
                    <div className="post" >
                        {this.state.posts.map((post)=>(
                                <div className="contenu" key={post.id}>
                                    <div className="head">
                                        <div className="left">
                                            <BusinessIcon className="img"></BusinessIcon>
                                        </div>
                                        <div className="right">
                                            <Link to="/edit">
                                                <EditIcon className="edit" onClick={()=>localStorage.setItem('id',post.id)}></EditIcon>
                                            </Link>
                                            <span onClick={()=>axios.delete(`http://localhost:8000/api/posts/delete/${post.id}`,{headers: {"Authorization" : `Bearer ${this.getToken()} `}}).then(res => {console.log(res); this.componentDidMount()})}><DeleteForeverIcon className="delete"></DeleteForeverIcon></span>
                                        </div>
                                    </div>
                                    <h4>{post.title}</h4>
                                    <p>{post.name}</p>
                                    <p>{post.city}</p>
                                    <ul>
                                        <li><MonetizationOnIcon className="icon"></MonetizationOnIcon>{post.price}</li>
                                        <li><WorkIcon className="icon"></WorkIcon>{post.categorie}</li>
                                    </ul>
                                    <div className="foter">
                                        <p className="description same">{post.detail}</p>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default Profile;
