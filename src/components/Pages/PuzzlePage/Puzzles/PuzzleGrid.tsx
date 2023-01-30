import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "./PuzzleGrid.module.scss";
import GridItem from "./GridItem";
import { getGridPositions } from "./GetGridPositions";
import { PuzzleContext } from "../../../../context/puzzle-context";
import { GridContext } from "../../../../context/grid-context";
interface PuzzleGridProps {
  image: string;
}
const PuzzleGrid = ({ image }: PuzzleGridProps) => {
  const [checkIsFinished, setCheckIsFinished] = useState(true);
  const { setScore, setStart, setWin, win, defeat } = useContext(PuzzleContext);
  const { shuffledGrid } = useContext(GridContext);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridPositions = getGridPositions();

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
        gridPositions
      )
    ) {
      setWin(true);
      setStart(false);
      setScore((prevScore) => prevScore + 1);
    } else {
      setWin(false);
    }
  }, [checkIsFinished]);

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
      className={`${styles["puzzle-grid"]} ${win || defeat ? styles.end : ""}`}
    >
      {!defeat &&
        (win ? gridPositions : shuffledGrid).map((gridPosition, i) => {
          return (
            <GridItem
              shuffledGrid={shuffledGrid}
              gridPosition={gridPosition}
              image={image}
              key={i}
              setCheckIsFinished={setCheckIsFinished}
            />
          );
        })}
      {defeat &&
        gridPositions.map((gridPosition, i) => {
          return (
            <GridItem
              shuffledGrid={shuffledGrid}
              gridPosition={gridPosition}
              image={image}
              key={i}
              setCheckIsFinished={setCheckIsFinished}
            />
          );
        })}
    </div>
  );
};

export default PuzzleGrid;
