export const getColumn = (idx: number) => {
  if (idx < 3) {
    return 1;
  } else if (idx < 6) {
    return 2;
  } else if (idx < 13) {
    return 3;
  } else if (idx < 20) {
    return 4;
  } else if (idx < 27) {
    return 5;
  } else if (idx < 30) {
    return 6;
  } else {
    return 7;
  }
};

export const getRow = (idx: number, column: number) => {
  if (column === 1 || column === 2 || column === 6 || column === 7) {
    return 3 + (idx % 3);
  } else {
    return ((idx + 1) % 7) + 1;
  }
};
