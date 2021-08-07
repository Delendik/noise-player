import React from 'react';
import * as Tone from 'tone'
import './App.css';

function App() {
const [volume, setVolume] = React.useState(-20)
let player:any
player = new Tone.Noise("white")
const white = () =>{
  player.type="white"
}
const pink = () =>{
  player.type="pink"
}
const brown = () =>{
  player.type="brown"
}

const upVolume = () => {
  setVolume(volume+5)
}
const downVolume = () => {
  setVolume(volume-5)
}

const start = () =>{
  if(player.type === "white"){
    player = new Tone.Noise("white").start();
    player.volume.value = volume;
  }else if(player.type === "pink"){
    player = new Tone.Noise("pink").start();
    player.volume.value = volume;
  }else if(player.type === "brown"){
    player = new Tone.Noise("brown").start();
    player.volume.value = volume;
  }

// // make an autofilter to shape the noise
const autoFilter = new Tone.AutoFilter({
	frequency: "0n",
	baseFrequency: 200,
	octaves: 8
}).toDestination().start();
// connect the noise
player.connect(autoFilter);
}

const stop = () => {
  player.stop();
}

  return (
    <div className="App">
      <header className="App-header">
        <button className="button buttonStart" onClick={start}>Play</button>
        <button className="button buttonStop" onClick={stop}>Stop</button>
        <button className="button buttonStop" onClick={white}>White</button>
        <button className="button buttonStop" onClick={pink}>Pink</button>
        <button className="button buttonStop" onClick={brown}>Brown</button>
        <button className="button buttonStop" onClick={upVolume}>upVolume</button>
        <button className="button buttonStop" onClick={downVolume}>downVolume</button>

      </header>
    </div>
  );
}

export default App;
