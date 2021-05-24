import React, { useState }from 'react';
import './style.css';
import BusinessIcon from '@material-ui/icons/Business';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WorkIcon from '@material-ui/icons/Work';

function FindJobs() {
    return (
        <div className="findjobs">
            <div className="post effect4">
                <div className="contenu">
                    <BusinessIcon className="img"></BusinessIcon>
                    <h4><strong>Human Resources Administrator</strong></h4>
                    <p>The company Name</p>
                    <p>New York, NY</p>
                    <ul>
                        <li><MonetizationOnIcon></MonetizationOnIcon>600 TND </li>
                        <li><WorkIcon></WorkIcon>IT Manager</li>
                    </ul>
                    <p>He or She will work closely with the HR Manager and should have strong background experience in the Human Resources field, preferably staffing and recruitment.</p>
                </div>

            </div>
        </div>
    )
}

export default FindJobs;
