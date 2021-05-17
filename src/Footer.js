import React from 'react';
import './style.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
function Footer() {
    return (
        <div className="footer">
            <div className="wave">

            </div>
            <footer>
                <div className="container">
                    <div className="sec aboutus">
                        <h2 className="dfd">About us</h2>
                        <p>Khadamni.tn its a web application that offers job opportunities for many people with different skills and provide an equal chances for everyone. The main purpose is to offer a good and easy experience while searching a job</p>
                        <ul className="sci">
                            <li><a href="#"><InstagramIcon className="fa"></InstagramIcon></a></li>
                            <li><a href="#"><FacebookIcon className="fa"></FacebookIcon></a></li>
                            <li><a href="#"><TwitterIcon className="fa"></TwitterIcon></a></li>
                            <li><a href="#"><YouTubeIcon className="fa"></YouTubeIcon></a></li>
                        </ul>
                    </div>
                    <div className="sec quicklinks">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>About</li>
                            <li>FAQ</li>
                            <li>Privacy Policies</li>
                            <li>Help</li>
                            <li>Terms</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="sec quicklinks">
                        <h2>Services</h2>
                        <ul>
                            <li>Sign up</li>
                            <li>Poqt my Job</li>
                            <li>Upload Resumee</li>
                            <li>Find Job</li>
                            <li>Company reviews</li>
                        </ul>
                    </div>
                    <div className="sec contact">
                        <h2>Quick Links</h2>
                        <ul className="info">
                            <li>
                                <span><RoomIcon></RoomIcon></span>
                                <span>5080 ISIMM Street<br/>Monastir, Stah Jabeur,<br/>TUNISIA</span>
                            </li>
                            <li>
                                <span><CallIcon></CallIcon></span>
                                <p><a href="#">+216 54 369 281</a><br/><a href="#">+216 54 369 281</a></p>
                            </li>
                            <li>
                                <span><EmailIcon></EmailIcon></span>
                                <p><a href="#">khadmany@gmail.com</a><br/></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copywrite">
                <p className="hhhh">Khadamni © 2021</p>
            </div>
        </div>
    )
}

export default Footer;
