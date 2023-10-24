import { useState } from "react";
import "./App.css";
import DrumPad from "./components/DrumPad";
import { DrumPadInfo } from "./types/DrumPadInfo";

function App() {
  const [lastPlayed, setLastPlayed] = useState("");

  const pads: DrumPadInfo[] = [
    {
      key: "Q",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      audioName: "Heater-1",
    },
    {
      key: "W",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      audioName: "Heater-2",
    },
    {
      key: "E",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      audioName: "Heater-3",
    },
    {
      key: "A",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      audioName: "Heater-4",
    },
    {
      key: "S",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      audioName: "Clap",
    },
    {
      key: "D",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      audioName: "Open-HH",
    },
    {
      key: "Z",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      audioName: "Kick-n'-Hat",
    },
    {
      key: "X",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      audioName: "Kick",
    },
    {
      key: "C",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      audioName: "Closed-HH",
    },
  ];

  const drumPads = pads.map((element, index) => {
    return (
      <DrumPad
        key={index}
        drumPadInfo={element}
        setLastPlayed={setLastPlayed}
      />
    );
  });

  return (
    <>
      <div id="drum-machine">
        <div id="display">
          {drumPads}
          <p>{lastPlayed}</p>
        </div>
      </div>
    </>
  );
}

export default App;
