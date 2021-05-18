import React, { Component , useState } from 'react';
import './style.css';


function Home() {
    return (
        <div className="content">
            <div className="leftside">
                <h1>Find the <strong>Right</strong> Job</h1><br/>
                <form className="form">
                    <input type="text" className="inputs" placeholder="Job title, Keywords" id="job"/>
                    <input type="text" className="inputs" placeholder="City, state, zip code" id="area"/>
                    <button id="btn">Find Job</button>
                </form>
                <p><q>All our dreams can come true <br/>if we have the courage to pursue<br/>them.</q><small>—Walt Disney</small></p>
            </div>
        </div>
    )
}

export default Home;
