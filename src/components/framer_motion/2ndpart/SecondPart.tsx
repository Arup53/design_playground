import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import "./styles.css";

const SecondPart = () => {
  //   const [open, setOpen] = useState(false);
  //   return (
  //     // layout animatio example -layout
  //     <div className="wrapper">
  //       <motion.div
  //         onClick={() => setOpen((o) => !o)}
  //         className="element"
  //         layout
  //         style={
  //           open
  //             ? { position: "fixed", inset: 0, width: "50%", height: "50%" }
  //             : { height: 48, width: 48 }
  //         }
  //       />
  //     </div>);
  // ------------- example 2 ---------------
  //   const [showSecond, setShowSecond] = useState(false);
  //   return (
  //     <div className="wrapper">
  //       <motion.button
  //         layout
  //         className="button"
  //         onClick={() => setShowSecond((s) => !s)}
  //       >
  //         Animate
  //       </motion.button>
  //       {showSecond ? (
  //         <motion.div
  //           layoutId="rectangle"
  //           className="second-element"
  //           style={{ borderRadius: 12 }}
  //         />
  //       ) : (
  //         <motion.div
  //           layoutId="rectangle"
  //           className="element"
  //           style={{ borderRadius: 12 }}
  //         />
  //       )}
  //     </div>
  //   );
  const [activeGame, setActiveGame] = useState(null);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveGame(null));

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    // before applying tranisition through layout animations
    <>
      {activeGame ? (
        <>
          <div className="overlay" />
          <div className="active-game">
            <div className="inner" ref={ref} style={{ borderRadius: 12 }}>
              <div className="header">
                <img
                  height={56}
                  width={56}
                  alt=""
                  src={activeGame.image}
                  style={{ borderRadius: 12 }}
                />
                <div className="header-inner">
                  <div className="content-wrapper">
                    <h2 className="game-title">{activeGame.title}</h2>
                    <p className="game-description">{activeGame.description}</p>
                  </div>
                  <button className="button">Get</button>
                </div>
              </div>
              <p className="long-description">{activeGame.longDescription}</p>
            </div>
          </div>
        </>
      ) : null}
      <ul className="list">
        {GAMES.map((game) => (
          <li
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
          >
            <img
              height={56}
              width={56}
              alt=""
              src={game.image}
              style={{ borderRadius: 12 }}
            />
            <div className="game-wrapper">
              <div className="content-wrapper">
                <h2 className="game-title">{game.title}</h2>
                <p className="game-description">{game.description}</p>
              </div>
              <button className="button">Get</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SecondPart;

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image: "/1.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image: "/2.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image: "/3.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image: "/4.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image: "/5.webp",
  },
];
