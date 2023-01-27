import React, { useContext } from "react";
import styles from "./Win.module.scss";
import Button from "../../../UI/Button";
import { IoMdExit } from "react-icons/io";
import { PuzzleContext } from "../../../../context/puzzle-context";
import { useNavigate } from "react-router";

const Win = () => {
  const navigate = useNavigate();
  const { setStart, setScore } = useContext(PuzzleContext);
  return (
    <div className={styles.win}>
      <span className={styles.stripe}></span>
      <span className={styles.stripe}></span>
      <span className={styles.stripe}>
        <p>
          Congratulations! You won!
          <br />
          Try another category!{" "}
        </p>
        <p>
          <Button
            style={styles["button--go-back"]}
            onClick={() => {
              navigate("/Puzzles");
              setStart(false);

              setTimeout(() => setScore(0), 1000);
            }}
          >
            <IoMdExit />
          </Button>
        </p>
      </span>
      <span className={styles.stripe}></span>
      <span className={styles.stripe}></span>
    </div>
  );
};

export default Win;
