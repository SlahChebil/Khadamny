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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PublishIcon from '@material-ui/icons/Publish';
import EditIcon from '@material-ui/icons/Edit';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Home from './Home';

function Profile() {
    let a = document.getElementById(".phonen");
    if(a){a.addEventListener("click", function(){
        document.querySelector(".popup").style.display= "flex";
    })}
    return (
        <div className="profile">
            <div className="container">
                <div className="info">
                    <AccountCircleIcon className="icon"></AccountCircleIcon>
                    <span>Your name</span>
                </div>
                <div className="upload">
                    <div className="head">
                        <h4>Get started</h4>
                    </div>
                    <div className="tail">
                        <button className="resume">
                            <PublishIcon className="publish"></PublishIcon>
                            <h4>Upload a resume</h4>
                        </button>
                    </div>
                </div>
                <div className="contact">
                    <div className="head">
                        <h4>Contact Information</h4>
                        <EditIcon className="edit"></EditIcon>
                    </div>
                    <div className="email">
                        <EmailIcon className="email"></EmailIcon>
                        <h3>sleh.chebil.sc@gmail.com</h3>
                    </div>
                    <div className="phones">
                        <div className="link">
                            <PhoneIcon className="phone"></PhoneIcon>
                            <a href="#" className="phonen" id="phonen">Add Phone Number</a>
                        </div>
                        <div className="link">
                            <LinkedIn className="phone"></LinkedIn>
                            <a href="#" className="phonen" id="phonen">Add LinkedIn profile</a>
                        </div>
                        <div className="link">
                            <FacebookIcon className="phone"></FacebookIcon>
                            <a href="#" className="phonen" id="phonen">Add Facebook profile</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup" id="popup">
                    <div className="popup_content">
                        <div className="head">
                            <h3>Contact Info</h3>
                            <CloseRoundedIcon className="close"></CloseRoundedIcon>
                        </div>
                        <div className="inputs">
                            <input type="text" placeholder="sleh.chebil.sc@gmail.com"/>
                            <input type="text" placeholder="Please add a Phone Number" />
                        </div>
                        <button className="Save">Save</button>
                    </div>
            </div>
        </div>
    )
}

export default Profile;
