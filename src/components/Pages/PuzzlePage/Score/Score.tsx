import React, { useContext } from "react";
import { PuzzleContext } from "../../../../context/puzzle-context";
import styles from "./Score.module.scss";
const Score = () => {
  const score = useContext(PuzzleContext).score;
  return <div className={styles.score}>Your score: {score}</div>;
};

export default Score;
