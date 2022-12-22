export const shuffleGrid = (gridPositions: string[]): string[] => {
  let shuffledGrid: string[];
  for (let i = gridPositions.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = gridPositions[j];
    gridPositions[j] = gridPositions[i];
    gridPositions[i] = temp;
    shuffledGrid = [...gridPositions];
  }
  return shuffledGrid;
};
