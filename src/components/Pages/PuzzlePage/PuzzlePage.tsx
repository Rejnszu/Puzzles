import React, { useState, useContext } from "react";
import styles from "./PuzzlePage.module.scss";
import Button from "../../UI/Button";
import Header from "../../UI/Header";
import PuzzleGrid from "./Puzzles/PuzzleGrid";
import Score from "./Score/Score";

import { useNavigate } from "react-router";
import { IoMdExit } from "react-icons/io";
import { PuzzleContext } from "../../../context/puzzle-context";
import { gridPositions } from "./Puzzles/GridPositions";

const PuzzlePage = () => {
  const navigate = useNavigate();
  const { selectedImagesArray } = useContext(PuzzleContext);
  const gridPosition = gridPositions();

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * selectedImagesArray.images.length)
  );

  const [shuffledGrid, setShuffledGrid] = useState(
    [...gridPosition].sort(() => Math.random() - 0.5)
  );

  const image = selectedImagesArray.images[randomNumber];

  const shufflePuzzles = () => {
    setRandomNumber((prevNumber) => {
      let number: number;
      do {
        number = Math.floor(Math.random() * selectedImagesArray.images.length);
      } while (prevNumber === number);
      return number;
    });
    setShuffledGrid([...gridPosition].sort(() => Math.random() - 0.5));
  };

  return (
    <main className={styles["puzzle-page"]}>
      <Header>Let the game begin</Header> <Score />
      <PuzzleGrid shuffledGrid={shuffledGrid} image={image} />
      <Button onClick={shufflePuzzles} style={styles["button--repeat"]}>
        Change Image
      </Button>
      <Button
        style={styles["button--go-back"]}
        onClick={() => {
          navigate("/Puzzles");
        }}
      >
        <IoMdExit />
      </Button>
    </main>
  );
};

export default PuzzlePage;
