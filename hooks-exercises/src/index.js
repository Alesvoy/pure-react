import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div>
      <h1>App!</h1>
      <Room />
      <br />
      <RandomList />
      <br />
      <AudioControlsV1 />
    </div>
  );
}

function Room() {
  const [lightswitch, setLightswitch] = useState("The room is dark");

  function switchHandler() {
    if (lightswitch === "The room is lit") {
      setLightswitch("The room is dark");
    } else {
      setLightswitch("The room is lit");
    }
    console.log(lightswitch);
  }

  return <button onClick={switchHandler}>lightswitch</button>;
}

function RandomList() {
  const [numbers, setNumbers] = useState([]);

  function clickHandler() {
    const randNum = Math.floor(Math.random() * 10);
    setNumbers([...numbers, randNum]);
  }

  return (
    <>
      <button onClick={clickHandler}>Add Number</button>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </>
  );
}

function AudioControlsV1() {
  let [volume, setVolume] = useState(20);
  let [treble, setTreble] = useState(30);
  let [mid, setMid] = useState(40);
  let [bass, setBass] = useState(50);

  const volumeHandler = (operation) => {
    operation === "+" ? setVolume(volume++) : setVolume(volume--);
  };

  const trebleHandler = (operation) => {
    operation === "+" ? setTreble(treble++) : setTreble(treble--);
  };

  const midHandler = (operation) => {
    operation === "+" ? setMid(mid++) : setMid(mid--);
  };

  const bassHandler = (operation) => {
    operation === "+" ? setBass(bass++) : setBass(bass--);
  };

  return (
    <>
      <button onClick={() => volumeHandler("-")}>-</button>
      <div>
        <p>{volume}</p>
        <p>VOLUME</p>
      </div>
      <button onClick={() => volumeHandler("+")}>+</button>
      <br />
      <button onClick={() => trebleHandler("-")}>-</button>
      <div>
        <p>{treble}</p>
        <p>TREBLE</p>
      </div>
      <button onClick={() => trebleHandler("+")}>+</button>
      <br />
      <button onClick={() => midHandler("-")}>-</button>
      <div>
        <p>{mid}</p>
        <p>MID</p>
      </div>
      <button onClick={() => midHandler("+")}>+</button>
      <br />
      <button onClick={() => bassHandler("-")}>-</button>
      <div>
        <p>{bass}</p>
        <p>BASS</p>
      </div>
      <button onClick={() => bassHandler("+")}>+</button>
    </>
  );
}

function AudioControlsV2() {}

ReactDOM.render(<App />, document.querySelector("#root"));
