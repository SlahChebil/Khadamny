import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <header>
                <div className="left">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <span className="logo">Khadamany</span>
                    </Link>
                    <Link to="./findjobs" style={{textDecoration: 'none' ,color: 'white'}}>
                        <span className="logos">Find Jobs</span>
                    </Link>
                    <span className="logos">Company reviews</span>
                </div>
                <div className="right">
                    <Link to="./wave" style={{textDecoration: 'none', color: 'white'}}>
                        <span className="logos">Upload your Resume</span>
                    </Link>
                    <button><span className="logos">Post my Job</span></button>
                    <Link to="./login" style={{textDecoration: 'none', color: 'white'}}>
                        <span className="logos" style={{color: '#fff'}}>Sign In</span>
                    </Link>
                </div>
                <div className="burger">
                    <div className="ligne1"></div>
                    <div className="ligne2"></div>
                    <div className="ligne3"></div>
                </div>
            </header>
        </div>
    )
}

export default Header;
