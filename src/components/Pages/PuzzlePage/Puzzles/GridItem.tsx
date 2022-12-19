import React, { useState, useEffect } from "react";
import styles from "./GridItem.module.scss";

const rotations: number[] = [90, 180, 270];

let firstSelectedItem: HTMLDivElement | EventTarget;
let secondSelectedItem: HTMLDivElement | EventTarget;
let firstItemPosition: string | EventTarget;

interface GridItemProps {
  setChanged: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
  gridPosition?: string;
  win: boolean;
  shuffledGrid: string[];
}

const GridItem = ({
  setChanged,
  image,
  gridPosition,
  win,
  shuffledGrid,
}: GridItemProps) => {
  const [randomRotation, setRandomRotation] = useState(
    rotations[Math.floor(Math.random() * rotations.length)]
  );

  useEffect(() => {
    setRandomRotation(rotations[Math.floor(Math.random() * rotations.length)]);
  }, [shuffledGrid]);

  return (
    <div
      style={{
        transform: `rotate(${randomRotation}deg)`,
        backgroundImage: `url(${image})`,
        gridArea: gridPosition,
        pointerEvents: win ? "none" : "auto",
      }}
      className={`${styles["grid-item"]}`}
      onClick={() => {
        setRandomRotation((prevRotation) => prevRotation + 90);
        setChanged((prevValue) => !prevValue);
      }}
      onMouseDown={(e) => {
        e.preventDefault();

        firstSelectedItem = e.target;

        firstItemPosition = (e.target as HTMLDivElement).style.gridArea;
        (firstSelectedItem as HTMLDivElement).classList.add(
          `${styles.movable}`
        );
      }}
      onMouseUp={(e) => {
        e.preventDefault();

        secondSelectedItem = e.target as HTMLDivElement;
        setChanged((prevValue) => !prevValue);
        (firstSelectedItem as HTMLDivElement).style.gridArea = (
          e.target as HTMLDivElement
        ).style.gridArea;
        (firstSelectedItem as HTMLDivElement).classList.remove(
          `${styles.movable}`
        );

        (
          secondSelectedItem as HTMLDivElement
        ).style.gridArea = `${firstItemPosition}`;
      }}
    ></div>
  );
};

export default GridItem;
