import React, { useState, useEffect, useContext } from "react";
import styles from "./Timer.module.scss";
import { PuzzleContext } from "../../../../context/puzzle-context";
let interval;
const Timer = () => {
  const [filling, setFilling] = useState(0);
  const { start, win } = useContext(PuzzleContext);
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
