import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Post from './Post';

const findjobs = () => {
    return axios.get('url')
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(err => {
        console.error(err);
    });
}

function Jobs() {
    const [jobss, setJobss] = useState('');
    const [jobs, setJob] = useState([
        {title: 'ISIMM', price: '15.00', id:1},
        {title: 'ISET', price: '35.00', id:3}
    ]);
    return (
        <div className="Jobs">
            <input type="submit" onClick={()=>{}} />
            {jobs.map((job) =>(
                <div className="job" key={job.id}>
                    <h2 style={{color : 'black'}}>{job.title}</h2>
                    <h3 style={{color : 'black'}}>{job.price}</h3>
                </div>
            ))}
            <Post></Post>
        </div>
    );
}

export default Jobs;
