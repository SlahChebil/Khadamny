import React , {Component}from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";
import axios from 'axios';


export class Headerlogged extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name:''
        }
    }
    signout(){
        localStorage.clear()
    }

    componentDidMount() {
        const token=localStorage.getItem('token')
        return axios.get('http://localhost:8000/api/home',{headers: {"Authorization" : `Bearer ${token}`}})
        .then(res => {
            console.log(res);
            const name = res.data.data.name;
            this.setState({
                name
            })
        })
        .catch(er => {
            console.log(er);
        })
      }
    render(){
    return (
        <div className="headerlogged">
            <div className="contentss">
                <Link to="/2" style={{textDecoration: 'none'}}>
                    <span className="logo">Khadamny</span>
                </Link>
                <div className="choix">
                    <ul>
                        <Link to="./findjobsprofile" style={{textDecoration: 'none' ,color: 'white'}}>
                            <li><a>Jobs</a></li>
                        </Link>
                        <Link to="./profile" style={{textDecoration: 'none' ,color: 'white'}}>
                            <li><a >Profile</a></li>
                        </Link>
                        <Link to ="./postJob" style={{textDecoration: 'none' ,color: 'white'}}>
                            <li className="button"><button className="button">Post jobs</button></li>
                        </Link>
                        <Link to="/" style={{textDecoration: 'none' ,color: 'white'}} onClick={()=>this.signout()}>
                            <li><a>Sign Out</a></li>
                        </Link>
                        <li><a href="#"><PersonIcon className="person"></PersonIcon></a></li>
                        <li>{this.state.name}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
}

export default Headerlogged;
