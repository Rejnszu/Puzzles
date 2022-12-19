import React, { useContext } from "react";
import styles from "./Select.module.scss";
import { useNavigate } from "react-router-dom";
import { PuzzleContext } from "../../../../context/puzzle-context";
import { imagesArray } from "../../PuzzlePage/Images";
interface SelectProps {
  img: string;
  title: string;
}
const Select = ({ img, title }: SelectProps) => {
  const puzzleContext = useContext(PuzzleContext);
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => {
        (e.target as HTMLDivElement).classList.add(`${styles.grow}`);
        setTimeout(() => {
          navigate("/game");
          puzzleContext.setSelectedImagesArray(
            imagesArray.find((obj) => obj.title === title)
          );
        }, 2000);
      }}
      className={styles.select}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h3 className={styles["select__title"]}>{title}</h3>
    </div>
  );
};

export default Select;
