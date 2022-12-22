import React, { useState } from "react";
import { imagesArray } from "../components/Pages/PuzzlePage/Images";
interface SelctedImagesArray {
  title: string;
  images: string[];
}
interface PuzzleContextObj {
  selectedImagesArray: SelctedImagesArray;
  setSelectedImagesArray: React.Dispatch<
    React.SetStateAction<SelctedImagesArray>
  >;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  win: boolean;
  setWin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PuzzleContext = React.createContext<PuzzleContextObj>({
  selectedImagesArray: imagesArray[0],
  setSelectedImagesArray: () => {},
  score: 0,
  setScore: () => {},
  start: false,
  setStart: () => {},
  win: false,
  setWin: () => {},
});

interface ContextProps {
  children: React.ReactNode;
}

const PuzzleContextProvider = ({ children }: ContextProps) => {
  const [selectedImagesArray, setSelectedImagesArray] = useState(
    imagesArray[0]
  );
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [win, setWin] = useState(false);
  const contextValue: PuzzleContextObj = {
    selectedImagesArray: selectedImagesArray,
    setSelectedImagesArray: setSelectedImagesArray,
    score: score,
    setScore: setScore,
    start: start,
    setStart: setStart,
    win: win,
    setWin: setWin,
  };

  return (
    <PuzzleContext.Provider value={contextValue}>
      {children}
    </PuzzleContext.Provider>
  );
};
export default PuzzleContextProvider;
