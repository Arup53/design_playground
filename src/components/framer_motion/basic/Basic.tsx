import { useState } from "react";
import "./style.css";
import { motion } from "motion/react";

const Basic = () => {
  const [reRun, setReRun] = useState(1);
  return (
    <div className="wrapper">
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
    </div>
  );
};

export default Basic;
