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
  loss: boolean;
  setLoss: React.Dispatch<React.SetStateAction<boolean>>;
  deleteImageAfterWin: (image: string) => void;
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
  loss: false,
  setLoss: () => {},
  deleteImageAfterWin: () => {},
});

interface ContextProps {
  children: React.ReactNode;
}

const PuzzleContextProvider = ({ children }: ContextProps) => {
  const [selectedImagesArray, setSelectedImagesArray] = useState(
    imagesArray[0]
  );
  function deleteImageAfterWin(image: string): void {
    setSelectedImagesArray((prevImages) => ({
      ...prevImages,
      images: prevImages.images.filter((img) => img !== image),
    }));
  }
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const contextValue: PuzzleContextObj = {
    selectedImagesArray: selectedImagesArray,
    setSelectedImagesArray: setSelectedImagesArray,
    score: score,
    setScore: setScore,
    start: start,
    setStart: setStart,
    win: win,
    setWin: setWin,
    loss: loss,
    setLoss: setLoss,
    deleteImageAfterWin: deleteImageAfterWin,
  };

  return (
    <PuzzleContext.Provider value={contextValue}>
      {children}
    </PuzzleContext.Provider>
  );
};
export default PuzzleContextProvider;
