import * as React from "react";
import { useRef, useEffect } from "react";
import keyboardJS from "keyboardjs";

import { SoundTypes } from "/sandbox/src/types";

interface Props {
  sound: SoundTypes;
  letter: string;
}

/**
 * I called this component a sound box because its visually a box and it plays sound
 * Hopefully thats clear to other people but it made sense in my head lol
 *
 * Pass in a sound you want to play when the user clicks on a letter (aka key on your keyboard) that you pass in
 * There is a defined list of sounds but for the letter you can use any key.
 */
export const SoundBox = ({ sound, letter }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    function playSound(e) {
      if (audioRef.current !== null) {
        const audio: HTMLAudioElement = audioRef.current;
        console.log(audio);

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
      }
    }

    keyboardJS.bind(letter, playSound);

    return () => keyboardJS.unbind(letter, playSound);
  }, [letter]);

  return (
    <audio
      ref={audioRef}
      data-key={letter}
      src={`/sounds/${sound}.wav`}
    ></audio>
  );
};
