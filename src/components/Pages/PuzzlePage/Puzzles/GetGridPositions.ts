export const getGridPositions = () => {
  let positions: string[];

  let userAgent = navigator.userAgent;

  if (userAgent.match(/firefox|fxios/i)) {
    positions = [
      "1 / 1",
      "1 / 2",
      "1 / 3",
      "2 / 1",
      "2 / 2",
      "2 / 3",
      "3 / 1",
      "3 / 2",
      "3 / 3",
      "4 / 1",
      "4 / 2",
      "4 / 3",
    ];
  } else {
    positions = [
      "1 / 1 / auto / auto",
      "1 / 2 / auto / auto",
      "1 / 3 / auto / auto",
      "2 / 1 / auto / auto",
      "2 / 2 / auto / auto",
      "2 / 3 / auto / auto",
      "3 / 1 / auto / auto",
      "3 / 2 / auto / auto",
      "3 / 3 / auto / auto",
      "4 / 1 / auto / auto",
      "4 / 2 / auto / auto",
      "4 / 3 / auto / auto",
    ];
  }
  return positions;
};
