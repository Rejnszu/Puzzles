import React from "react";
import Button from "../../../UI/Button";
import styles from "./Defeat.module.scss";
interface LossProps {
  onClick: () => void;
  endOfGame: boolean;
}
const Loss = ({ onClick, endOfGame }: LossProps) => {
  return (
    <div className={styles.loss}>
      {endOfGame && <p>You lost! Better Luck next time.</p>}
      <Button style={styles["button--defeat"]} onClick={onClick}>
        Try Again
      </Button>
    </div>
  );
};

export default Loss;
