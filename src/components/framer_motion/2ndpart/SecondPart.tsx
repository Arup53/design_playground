import { useState } from "react";
import { motion } from "motion/react";
import "./styles.css";

const SecondPart = () => {
  const [open, setOpen] = useState(false);

  return (
    // layout animatio example -layout
    <div className="wrapper">
      <motion.div
        onClick={() => setOpen((o) => !o)}
        className="element"
        layout
        style={
          open
            ? { position: "fixed", inset: 0, width: "50%", height: "50%" }
            : { height: 48, width: 48 }
        }
      />
    </div>
  );
};

export default SecondPart;
