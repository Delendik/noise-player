import React from 'react';
import * as Tone from 'tone'
// import './App.module.scss';
import cnBind from 'classnames/bind'
import styles from './App.module.scss'

const cx = cnBind.bind(styles)

function App() {
let play:boolean=false;

let changePlayClass = cx(
  "playButton", {
  "play": !play,
  "stop": play
})

let volume:any = -25
let volumeWhite:any = -35
let player:any
player = new Tone.Noise("white")
const white = () =>{
  player.type="white"
  player.volume.value = (volumeWhite);
}
const pink = () =>{
  player.volume.value = (volume);
  player.type="pink"
}
const brown = () =>{
  player.volume.value = (volume);
  player.type="brown"
}

const upVolume = () => {
  volume+=1
  volumeWhite+=1
  if(player.type === "white"){
    player.volume.value = (volumeWhite);
  }else{
    player.volume.value = (volume);
  }
}
const downVolume = () => {
  volume -=1
  volumeWhite-=1
  if(player.type === "white"){
    player.volume.value = (volumeWhite);
  }else{
    player.volume.value = (volume);
  }
}

const start = () =>{
  if(player.type === "white"){
    player = new Tone.Noise("white").start();
    player.volume.value = volumeWhite;
  }else if(player.type === "pink"){
    player = new Tone.Noise("pink").start();
    player.volume.value = volume;
  }else if(player.type === "brown"){
    player = new Tone.Noise("brown").start();
    player.volume.value = volume;
  }
const autoFilter = new Tone.AutoFilter({
  frequency: "0n",
  baseFrequency: 200,
  octaves: 4
}).toDestination().start();
// connect the noise
player.connect(autoFilter);
}

const stop = () => {
  player.stop();
  // setPlay(false)
}
const toogle= () => {
  play = !play
}

const playstop = () => {
  if(!play){
    start()
    
    console.log("stop")
    toogle()
    // setPlay(false)
    console.log(play)
  } else{
    stop();
    console.log("play")
    toogle()
    // setPlay(true)
    console.log(play)
  }
}


  return (
    <div className={styles.App}>
      <div className={styles.player}>
        <button className={changePlayClass} onClick={playstop}></button>
      </div>
      <header className={styles.App__header}>
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
