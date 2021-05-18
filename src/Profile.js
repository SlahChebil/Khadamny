import React from 'react';
import './style.css';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import { LinkedIn } from '@material-ui/icons';

function SignIn() {
    return (
        <div className="kbira">
            <div className="container">
                <div className="leftside">
                        <h2>About me</h2>
                        <div className="cadre1">
                            <ul>
                                <li><a href="#"><PersonIcon className="profile"></PersonIcon></a></li>
                                <li><a href="#">Add Name</a></li>
                                <li><a href="#">Add Headline</a></li>
                                <li><a href="#">Add Location</a></li>
                            </ul>
                        </div>
                        <h2>Contact Information</h2>
                        <div className="cadre2">
                            <ul>
                                <li><EmailIcon className="fa"></EmailIcon>sleh.chebil.sc@gmail.com</li>
                                <li><a href="#"><PhoneIcon className="fa"></PhoneIcon>Add Phone Number</a></li>
                            </ul>
                        </div>
                        <h2>Websites</h2>
                        <div className="cadre3">
                            <ul>
                                <li><a href="#"><LinkIcon className="fa"></LinkIcon>Add Website</a></li>
                                <li><a href="#"><TwitterIcon className="fa"></TwitterIcon>Add twitter Profile</a></li>
                                <li><a href="#"><LinkedIn className="fa"></LinkedIn>Add LinkedIn Profile</a></li>
                                <li><a href="#"><FacebookIcon className="fa"></FacebookIcon>Add Facebook Profile</a></li>
                            </ul>
                        </div>
                        
                </div>
                <div className="right side">
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
