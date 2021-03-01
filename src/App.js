import React, { useState, useEffect} from 'react';
import './App.css';
import playersData from './fakedata/data.json';
import PlayerInfo from './componenst/PlayerInfo/PlayerInfo';
import Add from './componenst/PlayerInfo/Add/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';


function App() {
  
  const [players,setPlayers] = useState([]);
  const [add,setadd] = useState([]);
  
  useEffect(() =>{
    setPlayers(playersData);
    console.log(playersData);
    const names = playersData.map(playersData => playersData.name)
    console.log(names);
  },[])
  
  
  
  const handleAddPlayed = (playersData) =>{
    console.log('player Added',playersData);

    const newAdd = [...add,playersData];
    setadd(newAdd);

    
    
  }
  
  
  return (
    
    
    <div>
      {/* using react-bootstrap */}
        <Navbar bg="dark" variant="dark">
        
          <Navbar.Brand href="#home">
            {' '}
            Team Selection
          </Navbar.Brand>
        </Navbar>
      
      <div className="players-container">
      <div className="players-section">
      {/* <h1>Total Players:{players.length}</h1> */}
      
      {
        playersData.map(playersData =><PlayerInfo
          handleAddPlayed={handleAddPlayed} 
           playersData = { playersData} ></PlayerInfo>)
      }
      </div>
      <div className="players-added">
        <Add add={add}></Add>
      </div>
      
    </div>
    </div>
  );
}

export default App;
