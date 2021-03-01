import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAd} from '@fortawesome/free-solid-svg-icons'
import './PlayerInfo.css';



const PlayerInfo = (props) => {
//using Destruct
const {name,salary,image} = props.playersData ;
console.log(props);


    return (
        <div className ='container' >
            <img  src={image} alt=""/>
            <h3>Player : {name}</h3>
            <p>Salary : ${salary}</p>
            <button className="main-button"
            onClick={() =>props.handleAddPlayed(props.playersData)
            }
            ><FontAwesomeIcon icon={faAd} />  Add Player</button>
        </div>
    );
};

export default PlayerInfo;