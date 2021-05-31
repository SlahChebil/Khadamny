import React , {Component}from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";

export class Headerlogged extends Component{
    render(){
    return (
        <div className="headerlogged">
            <div className="contentss">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <span className="logo">Khadamny</span>
                </Link>
                <div className="choix">
                    <ul>
                        <li><a>Jobs</a></li>
                        <Link to="./profile">
                            <li><a>Profile</a></li>
                        </Link>
                        <li><a href="#">Post jobs</a></li>
                        <li><a>Sign Out</a></li>
                        <li><a href="#"><PersonIcon className="person"></PersonIcon></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
}

export default Headerlogged;
