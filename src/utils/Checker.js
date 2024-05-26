const GRID_SIZE = 9;

function isNumberInRow(board, number, row) {
    for (let i = 0; i < GRID_SIZE; i++) {
        if (board[row][i] == number) {
            return true;
        }
    }
    return false;
}

function isNumberInCol(board, number, column) {
    for (let i = 0; i < GRID_SIZE; i++) {
        if (board[i][column] == number) {
            return true;
        }
    }
    return false;
}

function isNumberInBox(board, number, row, column) {
    let localBoxRow = row - row % 3;
    let localBoxColumn = column - column % 3;
    for (let i = localBoxRow; i < localBoxRow + 3; i++) {
        for (let j = localBoxColumn; j < localBoxColumn + 3; j++) {
            if (board[i][j] == number) {
                return true;
            }
        }
    }
    return false;
}

export function isValidPlacement(board, number, row, column) {
    console.log(row, column);
    return !isNumberInRow(board, number, row) && !isNumberInCol(board, number, column) && !isNumberInBox(board, number, row, column);
}