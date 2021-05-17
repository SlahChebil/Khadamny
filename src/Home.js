import React from 'react';
import './style.css';
import homeimg from './img/homeimage.png';

function Home() {
    return (
        <div className="content">
            <div className="leftside">
                <h1>Find the <strong>Right</strong> Job</h1><br/>
                <form className="form">
                    <input type="text" className="inputs" placeholder="Job title, Keywords"/>
                    <input type="text" className="inputs" placeholder="City, state, zip code"/>
                    <button>Find Job</button>
                </form>
                <p><q>All our dreams can come true <br/>if we have the courage to pursue<br/>them.</q><small>—Walt Disney</small></p>
            </div>
        </div>
    )
}

export default Home;
