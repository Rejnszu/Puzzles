import React, { useState } from "react";
import { getGridPositions } from "../components/Pages/PuzzlePage/Puzzles/GetGridPositions";
import { shuffleGrid } from "../helperFunctions/shuffle-grid";

interface GridContextObj {
  shuffledGrid: string[];
  onShuffleGrid: () => void;
}

export const GridContext = React.createContext<GridContextObj>({
  shuffledGrid: [],
  onShuffleGrid: () => {},
});

interface ContextProps {
  children: React.ReactNode;
}

const GridContextProvider = ({ children }: ContextProps) => {
  const gridPositions = getGridPositions();
  const [shuffledGrid, setShuffledGrid] = useState(shuffleGrid(gridPositions));

  const onShuffleGrid = () => {
    setShuffledGrid(shuffleGrid(gridPositions));
  };
  const contextValue: GridContextObj = {
    shuffledGrid: shuffledGrid,
    onShuffleGrid: onShuffleGrid,
  };

  return (
    <GridContext.Provider value={contextValue}>{children}</GridContext.Provider>
  );
};
export default GridContextProvider;
