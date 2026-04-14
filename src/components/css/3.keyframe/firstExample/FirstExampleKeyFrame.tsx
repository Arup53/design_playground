import { useState } from "react";
import "./FirstExampleKeyframeStyle.css";

const WORD = "Animation";

const FirstExampleKeyFrame = () => {
  const [reset, setReset] = useState(0);

  return (
    <div>
      <div key={reset}>
        <h1 className="h1">
          {WORD.split("").map((char, index) => (
            <span key={index} style={{ "--index": index }}>
              {char}
            </span>
          ))}
        </h1>
      </div>
      <button className="button" onClick={() => setReset(reset + 1)}>
        Replay animation
      </button>
    </div>
  );
};

export default FirstExampleKeyFrame;
