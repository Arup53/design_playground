import { useState } from "react";
import "./style.css";
import { AnimatePresence, motion } from "motion/react";

const Basic = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="wrapper">
      {/* spring vs easing */}
      <motion.div
        initial={{ x: -500 }}
        animate={{
          x: 500,
          transition: { type: "spring", duration: 2, bounce: 0.2 },
        }}
        className="element"
      />
      <motion.div
        className="element"
        initial={{ x: 500 }}
        animate={{
          x: -500,
          transition: { duration: 2, ease: "easeOut" },
        }}
      />

      {/* exit animation when a component is unmount from view */}
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible((prevState) => !prevState)}
            className="element cursor-pointer"
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Basic;
