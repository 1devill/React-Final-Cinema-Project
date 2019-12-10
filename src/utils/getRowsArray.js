export const getRowsArray = arr => {
  return arr.reduce((acc, elem) => {
    if (!acc.length) {
      return [[elem]];
    }

    const hasSameRow = acc.some(rowArray =>
      rowArray.some(obj => obj.row === elem.row)
    );

    if (hasSameRow) {
      return acc.map(rowArray => {
        const hasSameRow = rowArray.some(obj => obj.row === elem.row);

        if (hasSameRow) {
          return [...rowArray, elem];
        }

        return rowArray;
      });
    } else {
      return [...acc, [elem]];
    }
  }, []);
};
