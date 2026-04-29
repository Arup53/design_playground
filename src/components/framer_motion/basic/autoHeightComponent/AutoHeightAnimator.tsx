import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import useMeasure from "react-use-measure";
import "./stylesAutoHeightAnimation.css";

export default function Example() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [elementRef, bounds] = useMeasure();

  return (
    <div className="wrapper">
      <button className="button" onClick={() => setShowExtraContent((b) => !b)}>
        Toggle height
      </button>
      <motion.div animate={{ height: bounds.height }} className="element">
        <div ref={elementRef} className="inner">
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {showExtraContent ? (
            <p>This extra content will change the height of the drawer.</p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
