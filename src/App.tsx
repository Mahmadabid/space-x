import React, { useState } from 'react';
import './App.css';
import LaunchContainer from "./components/Launch/index";
import LaunchDeatailsContainer from "./components/LaunchDetails/index";

function App() {

  const [idstate, setid] = useState('select');

  return (
    <div className="App">
        <LaunchContainer setid={setid}/>
        <LaunchDeatailsContainer idstate={idstate}/>
    </div>
  );
}

export default App;
