import React from 'react';
import './style.css';
import { Link, Redirect } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <header>
                <div className="left">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <span className="logo">Khadamany</span>
                    </Link>


                </div>
                <div className="right">
                    <Link to="./findjobs" style={{textDecoration: 'none' ,color: 'white'}}>
                        <span className="logos">Find Jobs</span>
                    </Link>
                    <Link to="./signine" style={{textDecoration: 'none', color: 'white'}}>
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
