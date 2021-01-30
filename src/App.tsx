import React, { useState } from 'react';
import './App.css';
import LaunchContainer from "./components/Launch/index";
import LaunchDeatailsContainer from "./components/LaunchDetails/index";

function App() {

  const [idstate, setid] = useState('select');
  const [success, setsuccess] = useState('null');

  return (
    <div className="App">
      <LaunchContainer 
        setid={(str: string) => {
          setid(str);
        }}
        setsuccess={(str: string) => {
          setsuccess(str);
        }}
      />
      <LaunchDeatailsContainer idstate={idstate} success={success} />
    </div>
  );
}

export default App;
