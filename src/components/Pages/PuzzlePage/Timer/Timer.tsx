import React, { useState, useEffect, useContext } from "react";
import styles from "./Timer.module.scss";
import { PuzzleContext } from "../../../../context/puzzle-context";
let interval: NodeJS.Timeout;
const Timer = () => {
  const [filling, setFilling] = useState(0);
  const { start, win, setDefeat, score, setScore } = useContext(PuzzleContext);

  useEffect(() => {
    if (start && !win && filling <= 99.75) {
      interval = setInterval(
        () => setFilling((prevFilling) => prevFilling + 0.25),
        150
      );
    } else if (!start) {
      setFilling(0);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, win, filling]);

  useEffect(() => {
    if (filling === 100) {
      setDefeat(true);
      if (score > 0) {
        setScore((prevScore) => prevScore - 1);
      }
    }
  }, [filling]);
  return (
    <div className={styles.timer}>
      <span
        style={{ width: `${filling}%` }}
        className={styles["timer__filling"]}
      ></span>
    </div>
  );
};

export default Timer;
