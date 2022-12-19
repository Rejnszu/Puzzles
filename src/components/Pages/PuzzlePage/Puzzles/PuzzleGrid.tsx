import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "./PuzzleGrid.module.scss";
import GridItem from "./GridItem";
import { gridPositions } from "./GridPositions";
import { PuzzleContext } from "../../../../context/puzzle-context";

interface PuzzleGridProps {
  image: string;
  shuffledGrid: string[];
}
const PuzzleGrid = ({ image, shuffledGrid }: PuzzleGridProps) => {
  const [changed, setChanged] = useState(true);
  const [win, setWin] = useState(false);
  const changeScore = useContext(PuzzleContext).setScore;
  const gridRef = useRef<HTMLDivElement>(null);
  const gridPosition = gridPositions();
  
  const compareArrays = (arr1: string[], arr2: string[]) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  };
  useEffect(() => {
    const gridItems = gridRef.current!.children;
    if (
      Array.from(gridItems).every(
        (item) =>
          +(item as HTMLDivElement).style.transform
            .replace("deg)", "")
            .replace("rotate(", "") %
            360 ===
          0
      ) &&
      compareArrays(
        Array.from(gridItems).map(
          (gridItem) => (gridItem as HTMLDivElement).style.gridArea
        ),
        gridPosition
      )
    ) {
      setWin(true);
      changeScore((prevScore) => prevScore + 1);
    } else {
      setWin(false);
    }
  }, [changed]);

  useEffect(() => {
    setWin(false);
  }, [shuffledGrid]);

  return (
    <div
      ref={gridRef}
      onMouseDown={() =>
        Array.from(gridRef.current!.children).forEach((item) =>
          item.classList.add(`${styles.isGrabbing}`)
        )
      }
      onMouseUp={() =>
        Array.from(gridRef.current!.children).forEach((item) =>
          item.classList.remove(`${styles.isGrabbing}`)
        )
      }
      className={`${styles["puzzle-grid"]} ${win ? styles.win : ""}`}
    >
      {shuffledGrid.map((gridPosition, i) => {
        return (
          <GridItem
            shuffledGrid={shuffledGrid}
            gridPosition={gridPosition}
            image={image}
            key={i}
            setChanged={setChanged}
            win={win}
          />
        );
      })}
    </div>
  );
};

export default PuzzleGrid;
