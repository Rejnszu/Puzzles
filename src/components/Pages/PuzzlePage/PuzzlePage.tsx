import React, { useState, useContext } from "react";
import styles from "./PuzzlePage.module.scss";
import Button from "../../UI/Button";
import Header from "../../UI/Header";
import PuzzleGrid from "./Puzzles/PuzzleGrid";
import Score from "./Score/Score";
import Timer from "./Timer/Timer";
import Loss from "./Defeat/Defeat";
import Win from "./Win/Win";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { IoMdExit } from "react-icons/io";
import { PuzzleContext } from "../../../context/puzzle-context";
import { GridContext } from "../../../context/grid-context";

const PuzzlePage = () => {
  const navigate = useNavigate();
  const {
    selectedImagesArray,
    setStart,
    start,
    setWin,
    setDefeat,
    defeat,
    win,
    score,
    deleteImageAfterWin,
  } = useContext(PuzzleContext);

  const { onShuffleGrid } = useContext(GridContext);

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * selectedImagesArray.images.length)
  );

  let image = selectedImagesArray.images[randomNumber];
  let endOfGameDefeat = selectedImagesArray.images.length === 1 && score < 5;

  const shufflePuzzles = () => {
    if (win) {
      deleteImageAfterWin(image);
    }
    if (!endOfGameDefeat) {
      setRandomNumber((prevNumber) => {
        let number: number;
        do {
          number = Math.floor(
            Math.random() * selectedImagesArray.images.length
          );
        } while (prevNumber === number);
        return number;
      });
    }
    setStart(false);
    setWin(false);
    setDefeat(false);
    onShuffleGrid();
    endOfGameDefeat && navigate("/Puzzles");
  };

  return (
    <motion.main
      initial={{ filter: "blur(5px)" }}
      animate={{ filter: "blur(0px)" }}
      exit={{ filter: "blur(5px)" }}
      transition={{ duration: 0.8 }}
      className={`${styles["puzzle-page"]} `}
    >
      <Header>Let the game begin</Header>
      <Score />
      <Timer />
      <PuzzleGrid image={image} />
      <Button
        onClick={shufflePuzzles}
        style={`${styles["button--repeat"]} ${start && styles.disabled}`}
      >
        Change Image
      </Button>
      <Button
        style={styles["button--go-back"]}
        onClick={() => {
          navigate("/Puzzles");
          setStart(false);
        }}
      >
        <IoMdExit />
      </Button>
      {defeat && <Loss endOfGame={endOfGameDefeat} onClick={shufflePuzzles} />}
      {score >= 5 && <Win />}
    </motion.main>
  );
};

export default PuzzlePage;
