import { useEffect } from "react";
import { DrumPadInfo } from "../types/DrumPadInfo";

function DrumPad({
  drumPadInfo,
  setLastPlayed,
}: {
  drumPadInfo: DrumPadInfo;
  setLastPlayed: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { key, audioClip, audioName } = drumPadInfo;

  const handleClickOrButtonPress = (e?: KeyboardEvent) => {
    if (e != null && e.key != key.toLowerCase()) {
      return;
    }
    const audioElement = document.getElementById(key) as HTMLAudioElement;
    audioElement.play();
    setLastPlayed(audioName);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleClickOrButtonPress);
    return () => {
      document.removeEventListener("keydown", handleClickOrButtonPress);
    };
  });

  return (
    <div
      className="drum-pad"
      onClick={() => handleClickOrButtonPress()}
      style={{ border: "1px solid black" }}
      id={audioName}
    >
      <audio id={key} src={audioClip} className="clip"></audio>
      {key}
    </div>
  );
}

export default DrumPad;
