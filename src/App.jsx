import React, { useEffect } from 'react';
import * as Tone from 'tone'
import './App.css';

function App() {
const [volume, setVolume] = React.useState(0)
const [color, setColor] = React.useState("brown")
let clock = new Tone.Noise(color)

const white = () =>{
  clock.type = "white"
}
const pink = () =>{
  clock.type = "pink"
}
const brown = () =>{
  clock.type = "brown"
}
const upVolume = () => {
  setVolume(volume + 2)
  clock.volume.value = volume;
  console.log(clock.volume.value)
  console.log(clock.name)
}
const downVolume = () => {
  setVolume(volume - 2)
  clock.volume.value = volume;
  console.log(clock.volume.value)
  console.log(clock.name)
}
// useEffect(() => {
// });
// blockTime: 0.0026666666666666666
// channelCount: 2
// channelCountMode: "max"
// channelInterpretation: "speakers"
// disposed: false
// fadeIn: 0
// fadeOut: 0
// mute: false
// numberOfInputs: 0
// numberOfOutputs: 1
// playbackRate: 1
// sampleTime: 0.000020833333333333333
// state: "stopped"
// type: "brown"

const start = () =>{
  clock.start();
  clock.volume.value = volume;

  const autoFilter = new Tone.AutoFilter({
    frequency: "0n",
    baseFrequency: 200,
    octaves: 8
  }).toDestination().start();
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
