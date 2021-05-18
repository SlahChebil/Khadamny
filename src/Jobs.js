import React from 'react';
import { useState } from 'react';

const findjobs = () => {
    return axios.get('url')
    .then(res => {
        console.log(res);
    })
}

function Jobs() {
    const [jobs, setJob] = useState([
        {title: 'ISIMM', price: '15.00', id:1},
        {title: 'ISET', price: '35.00', id:3}
    ]);
    return (
        <div className="Jobs">
            <input type="submit" onClick={()=>{findjobs();}} />
            {jobs.map((job) =>(
                <div className="job" key={job.id}>
                    <h2 style={{color : 'black'}}>{job.title}</h2>
                    <h3 style={{color : 'black'}}>{job.price}</h3>
                </div>
            ))}
        </div>
    );
}

export default Jobs;
