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
}

export const PuzzleContext = React.createContext<PuzzleContextObj>({
  selectedImagesArray: imagesArray[0],
  setSelectedImagesArray: () => {},
  score: 0,
  setScore: () => {},
});

interface ContextProps {
  children: React.ReactNode;
}

const PuzzleContextProvider = ({ children }: ContextProps) => {
  const [selectedImagesArray, setSelectedImagesArray] = useState(
    imagesArray[0]
  );
  const [score, setScore] = useState(0);

  const contextValue: PuzzleContextObj = {
    selectedImagesArray: selectedImagesArray,
    setSelectedImagesArray: setSelectedImagesArray,
    score: score,
    setScore: setScore,
  };

  return (
    <PuzzleContext.Provider value={contextValue}>
      {children}
    </PuzzleContext.Provider>
  );
};
export default PuzzleContextProvider;
