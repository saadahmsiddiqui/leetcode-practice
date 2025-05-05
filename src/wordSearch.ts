function isSameAsPreviousStep(
  previousStepRow: number | null,
  previousStepCol: number | null,
  nextStepRow: number,
  nextStepCol: number
): boolean {
  return previousStepRow === nextStepRow && previousStepCol === nextStepCol;
}

function stepForward(
  board: string[][],
  word: string,
  wordIndex: number,
  currentRow: number,
  currentColumn: number,
  previousRow: number | null,
  previousCol: number | null
) {
  if (
    wordIndex === word.length - 1 &&
    word[wordIndex] === board[currentRow][currentColumn]
  ) {
    return true;
  }

  if (
    wordIndex < word.length - 1 &&
    word[wordIndex] === board[currentRow][currentColumn]
  ) {
    const prevCol = currentColumn - 1;
    const nextCol = currentColumn + 1;
    const prevLine = currentRow - 1;
    const nextLine = currentRow + 1;

    const leftCellOutOfRange = prevCol < 0;
    const rightCellOutOfRange = nextCol >= board[0].length;
    const upperCellOutOfRange = prevLine < 0;
    const bottomCellOutOfRange = nextLine >= board.length;

    if (
      !isSameAsPreviousStep(
        previousRow,
        previousCol,
        currentRow,
        nextCol
      ) &&
      !rightCellOutOfRange &&
      board[currentRow][nextCol] === word[wordIndex + 1]
    ) {
      return stepForward(board, word, wordIndex + 1, currentRow, nextCol, currentRow, currentColumn);
    } else if (
      !isSameAsPreviousStep(
        previousRow,
        previousCol,
        nextLine,
        currentColumn
      ) &&
      !bottomCellOutOfRange &&
      board[nextLine][currentColumn] === word[wordIndex + 1]
    ) {
      return stepForward(board, word, wordIndex + 1, nextLine, currentColumn, currentRow, currentColumn);
    } else if (
      !isSameAsPreviousStep(
        previousRow,
        previousCol,
        prevLine,
        currentColumn
      ) &&
      !upperCellOutOfRange &&
      board[prevLine][currentColumn] === word[wordIndex + 1]
    ) {
      return stepForward(board, word, wordIndex + 1, prevLine, currentColumn, currentRow, currentColumn);
    } else if (
      !isSameAsPreviousStep(
        previousRow,
        previousCol,
        currentRow,
        prevCol
      ) &&
      !leftCellOutOfRange &&
      board[currentRow][prevCol] === word[wordIndex + 1]
    ) {
      return stepForward(board, word, wordIndex + 1, currentRow, prevCol, currentRow, currentColumn);
    } else {
      return false;
    }
  }

  return false;
}

export function exist(board: string[][], word: string): boolean {
  let exists = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        exists = stepForward(board, word, 0, i, j, null, null);

        if (exists) {
          return true;
        }
      }
    }
  }

  return exists;
}
