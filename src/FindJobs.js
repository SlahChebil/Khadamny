import React, { useState }from 'react';
import './style.css';
import BusinessIcon from '@material-ui/icons/Business';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WorkIcon from '@material-ui/icons/Work';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export class FindJobs extends Component{
    
    render() {
        const popup = () => {
            let a = document.querySelector(".popup");
            a.style.display= "flex";
        }
        const close = () => {
            let a = document.querySelector(".popup");
            a.style.display= "none";
        }
        return(
        <div className="findjobs">
            <div className="container">
                <div className="recherche">
                    <form className="formrech">
                        <input type="text" className="inputsrech" placeholder="Job title, Keywords" id="job"/>
                        <input type="text" className="inputsrech" placeholder="City, state, zip code" id="area"/>
                        <button id="btnrech">FIND JOBS</button>
                    </form>
                </div>
                <div className="post" onClick={()=>popup()}>
                    <div className="contenu">
                        <BusinessIcon className="img"></BusinessIcon>
                        <h4>Human Resources Administrator</h4>
                        <p>VERMEG</p>
                        <p>New York, NY</p>
                        <ul>
                            <li><MonetizationOnIcon className="icon"></MonetizationOnIcon>600 TND</li>
                            <li><WorkIcon className="icon"></WorkIcon>IT Manager</li>
                        </ul>
                        <div className="foter">
                            <p className="description same">He or She will work closely with the HR Manager and should have strong background experience in the Human Resources field, preferably staffing and recruitment.</p>
                            <button className="apply same" onClick={()=>popup()}>Click Apply</button>
                        </div>
                    </div>
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
