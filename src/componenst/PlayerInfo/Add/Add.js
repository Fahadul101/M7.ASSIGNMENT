import React from 'react';
import './Add.css';

const Add = (props) => {
    const add = props.add;
    console.log(add);
    
    const totalTeamPrice = add.reduce((total,adp) => total + adp.salary,0);
    console.log(totalTeamPrice);
    

    return (
        <div className="add-section">
            <h1>Players Added</h1>
            <div>
            <h5>player Name:{add.name}</h5>
            <h5>player Salary:{add.salary}</h5>
            </div>
            <p>player adds :  {add.length}</p>
            <p>Total Team Budget : ${totalTeamPrice}</p>
        </div>
    );
};

export default Add;