import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

import './style.css';
import { Phone } from '@material-ui/icons';

function Footers() {
    return (
        <div className="footers">
            <footer>
                <div className="main-content">
                    <div className="left box">
                        <h2>About us</h2>
                        <div className="contents">
                            <p>Khadamni.tn its a web application that offers job opportunities for many people with different skills and provide an equal chances for everyone. The main purpose is to offer a good and easy experience while searching a job</p>
                            <div className="social">
                                <ul className="social">
                                    <li><a href="#"><FacebookIcon className="fab fa-facebook-f"></FacebookIcon></a></li>
                                    <li><a href="#"><TwitterIcon className="fab fa-twitter"></TwitterIcon></a></li>
                                    <li><a href="#"><InstagramIcon className="fab fa-instagram"></InstagramIcon></a></li>
                                    <li><a href="#"><YouTubeIcon className="fab fa-youtube"></YouTubeIcon></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="center box">
                        <h2>Address</h2>
                           <div className="contents">
                                <div className="place">
                                    <span className="hello"><RoomIcon className="fas has"></RoomIcon></span>
                                    <span className="text">Monastir, Tunisia</span>
                                </div>
                                <div className="phone">
                                    <span><CallIcon className="fas"></CallIcon></span>
                                    <span className="text">+216-54369281</span>
                                </div>
                                <div className="email">
                                    <span><EmailIcon className="fas"></EmailIcon></span>
                                    <span className="text">khadamny@gmail.com</span>
                                </div>
                            </div>
                    </div>

                    <div className="right box">
                        <h2>Contact us</h2>
                        <div className="contents">
                            <form action="#">
                                <div className="email">
                                    <div className="text">Email *</div>
                                    <input type="email" required></input>
                                </div>
                                <div className="msg">
                                    <div className="text">Message *</div>
                                    <textarea rows="2" cols="25" required></textarea>
                                </div>
                                <div className="btn">
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footers;
