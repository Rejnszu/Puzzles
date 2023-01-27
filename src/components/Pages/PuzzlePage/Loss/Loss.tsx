import React from "react";
import Button from "../../../UI/Button";
import styles from "./Loss.module.scss";
interface LossProps {
  onClick: () => void;
}
const Loss = ({ onClick }: LossProps) => {
  return (
    <div className={styles.loss}>
      <p>You lost! Better Luck next time.</p>
      <Button style={styles["button--loss"]} onClick={onClick}>
        Try Again
      </Button>
    </div>
  );
};

export default Loss;
