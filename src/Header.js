import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header>
            <div className="left">
                <span className="logo">Khadamany</span>
                <span className="logos">Find Jobs</span>
                <span className="logos">Company reviews</span>
            </div>
            <div className="right">
                <span className="logos">Upload your Resume</span>
                <button><span className="logos">Post my Job</span></button>
                <span className="logos">Sign In</span>
            </div>
            <div class="burger">
                <div class="ligne1"></div>
                <div class="ligne2"></div>
                <div class="ligne3"></div>
            </div>
        </header>
    )
}

export default Header;
