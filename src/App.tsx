import * as React from "react";
import { useEffect } from "react";
import keyboardJS from "keyboardjs";

import { SoundBox } from "./components/SoundBox";

import "./styles.css";

export default function App() {
  useEffect(() => {
    // need to initialize the keyboardJS library watching up here in the top App leve
    // so that all components anywhere can simply bind functions to keys without any more work
    keyboardJS.watch();

    return () => keyboardJS.stop();
  }, []);

  return (
    <div className="App">
      <SoundBox sound="boom" letter="b" />
      test
    </div>
  );
}
