import { useState } from 'react';
import './App.css';
import { Box } from './Components/Box/Box';

function App() {
  let [currMove, setCurrMove] = useState("X");
  return (
    <>
    <div className="App">
      <Box currMove={currMove} setMove={setCurrMove} />
      <Box currMove={currMove} setMove={setCurrMove} />
      <Box currMove={currMove} setMove={setCurrMove} />
    </div>
    <div className="App">
      <Box currMove={currMove} setMove={setCurrMove} />
      <Box currMove={currMove} setMove={setCurrMove} />
      <Box currMove={currMove} setMove={setCurrMove} />
    </div>
    <div className="App">
      <Box currMove={currMove} setMove={setCurrMove} />
      <Box currMove={currMove} setMove={setCurrMove} />
      <Box currMove={currMove} setMove={setCurrMove} />
    </div>
    </>
    
  );
}

export default App;
