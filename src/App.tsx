import React from 'react';
import * as Tone from 'tone'
import './App.css';

function App() {
const [volume, setVolume] = React.useState(-20)
const [color, setColor] = React.useState("white")
const white = () =>{
  setColor("white")
}
const pink = () =>{
  setColor("pink")
}
const brown = () =>{
  setColor("brown")
}

const upVolume = () => {
  setVolume(volume+5)
}
const downVolume = () => {
  setVolume(volume-5)
}

let clock:any

// const start = () =>{
//   clock = new Tone.Oscillator().toDestination().start();
// // a scheduleable signal which can be connected to control an AudioParam or another Signal
// const signal = new Tone.Signal({
// 	value: "C4",
// 	units: "frequency"
// }).connect(clock.frequency);
// // the scheduled ramp controls the connected signal
// signal.rampTo("C2", 4, "+0.5");
// }

// const stop = () => {
//   clock.stop();
// }
const start = () =>{
  if(color === "white"){
    clock = new Tone.Noise("white").start();
    clock.volume.value = volume;
  }else if(color === "pink"){
    clock = new Tone.Noise("pink").start();
  }else if(color === "brown"){
    clock = new Tone.Noise("brown").start();
  }
  // const source = new Tone.PWMOscillator().toDestination();
  // source.volume.value = -50;

// // make an autofilter to shape the noise
const autoFilter = new Tone.AutoFilter({
	frequency: "0n",
	baseFrequency: 200,
	octaves: 8
}).toDestination().start();
// connect the noise
clock.connect(autoFilter);
}

const stop = () => {
  clock.stop();
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
