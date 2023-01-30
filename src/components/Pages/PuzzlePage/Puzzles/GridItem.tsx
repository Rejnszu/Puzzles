import React, { useState, useEffect, useContext } from "react";
import styles from "./GridItem.module.scss";
import { PuzzleContext } from "../../../../context/puzzle-context";
const rotations: number[] = [90, 180, 270];

let firstSelectedItem: HTMLDivElement | EventTarget;
let secondSelectedItem: HTMLDivElement | EventTarget;
let firstItemPosition: string | EventTarget;

interface GridItemProps {
  setCheckIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
  gridPosition: string;
  shuffledGrid: string[];
}

const GridItem = ({
  setCheckIsFinished,
  image,
  gridPosition,
  shuffledGrid,
}: GridItemProps) => {
  const [randomRotation, setRandomRotation] = useState(
    rotations[Math.floor(Math.random() * rotations.length)]
  );
  const { setStart, win, defeat } = useContext(PuzzleContext);

  useEffect(() => {
    setRandomRotation(rotations[Math.floor(Math.random() * rotations.length)]);
  }, [shuffledGrid]);

  return (
    <div
      style={{
        transform: defeat ? "rotate(0deg)" : `rotate(${randomRotation}deg)`,
        backgroundImage: `url(${image})`,
        gridArea: gridPosition,
        pointerEvents: win || defeat ? "none" : "auto",
      }}
      className={`${styles["grid-item"]}`}
      onClick={() => {
        setRandomRotation((prevRotation) => prevRotation + 90);
        setCheckIsFinished((prevValue) => !prevValue);
        setStart(true);
      }}
      onMouseDown={(e) => {
        e.preventDefault();

        firstSelectedItem = e.target;

        firstItemPosition = (e.target as HTMLDivElement).style.gridArea;
        (firstSelectedItem as HTMLDivElement).classList.add(
          `${styles.movable}`
        );
        setStart(true);
      }}
      onMouseUp={(e) => {
        e.preventDefault();

        secondSelectedItem = e.target as HTMLDivElement;
        setCheckIsFinished((prevValue) => !prevValue);
        (firstSelectedItem as HTMLDivElement).style.gridArea = (
          e.target as HTMLDivElement
        ).style.gridArea;
        (firstSelectedItem as HTMLDivElement).classList.remove(
          `${styles.movable}`
        );

        (
          secondSelectedItem as HTMLDivElement
        ).style.gridArea = `${firstItemPosition}`;
        setStart(true);
      }}
    ></div>
  );
};

export default GridItem;
