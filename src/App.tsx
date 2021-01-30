import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import LaunchContainer from "./components/Launch/index";
import LaunchDeatailsContainer from "./components/LaunchDetails/index";

function App() {

  const [idstate, setid] = useState('select');
  const [islit, setlit] = useState(true);

  return (
    <div className={`${islit ? '' : 'dark'}`}>
      <Header islit={islit} setlit={setlit} />
      <div className="App">
        <LaunchContainer
          setid={(str: string) => {
            setid(str);
          }}
          islit={islit}
        />
        <LaunchDeatailsContainer idstate={idstate} />
      </div>
    </div>
  );
}

export default App;
