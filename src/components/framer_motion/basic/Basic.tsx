import { useState } from "react";
import "./style.css";
import { AnimatePresence, motion } from "motion/react";
import { CheckCheckIcon, CopyIcon } from "lucide-react";
import SmoothButton from "./ButtonWithSpinner";

const Basic = () => {
  const [isVisible, setIsVisible] = useState(true);

  // for example 3
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const [copied, setCopied] = useState(false);

  return (
    <div className="wrapper">
      {/*1. spring vs easing */}
      {/* <motion.div
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
      /> */}

      {/*2. exit animation when a component is unmount from view */}
      {/* <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible((prevState) => !prevState)}
            className="element cursor-pointer"
          />
        ) : null}
      </AnimatePresence> */}

      {/* 3.exitanimation example: before and after copy button exit animation */}

      {/* <button
        className="cursor-pointer border border-gray-300 rounded-md h-[32px] w-[32px] flex justify-center items-center p-[6px]"
        aria-label="Copy code snippet"
        onClick={() => setCopied(true)}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="checkmark"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <CheckCheckIcon size={15} />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <CopyIcon size={15} />
            </motion.span>
          )}
        </AnimatePresence>
      </button> */}
      {/* button with three different states  */}
      <SmoothButton />
    </div>
  );
};

export default Basic;
