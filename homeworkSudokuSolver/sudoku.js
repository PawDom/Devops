let board = [
    [7, 0, 4, 8, 0, 0, 3, 0, 1],
    [8, 2, 0, 5, 0, 0, 0, 4, 0],
    [0, 0, 9, 4, 3, 0, 5, 0, 0],
    [3, 1, 0, 0, 0, 0, 8, 0, 7],
    [0, 8, 0, 0, 0, 0, 0, 1, 0],
    [9, 0, 7, 0, 0, 0, 0, 3, 2],
    [0, 0, 6, 0, 1, 5, 4, 0, 0],
    [0, 7, 0, 0, 0, 9, 0, 6, 5],
    [5, 0, 8, 0, 0, 2, 1, 0, 3]
];


// Funkcja wyszukuje pola równe 0 i podaje koordynaty (która tablica i jaki indeks), zwraca informację gdy wszystko jest pełne
function nextEmptySpot(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) 
                return [i, j];
        }
    }
    return [-1, -1];
}

//Funkcja sprawdza kolumny, iteruje dopóki są te same wartości

function checkRow(board, row, value){
    for(let i = 0; i < board[row].length; i++) {
        if(board[row][i] === value) {
            return false;
        }
    }
   
    return true;
}

//Jak wyżej tylko dla kolumn

function checkColumn(board, column, value){
    for(let i = 0; i < board.length; i++) {
        if(board[i][column] === value) {
            return false;
        }
    }

    return true;
};

//Jak wyżej tylko dla mniejszych kwadratów 3x3

function checkSquare(board, row, column, value){
    boxRow = Math.floor(row / 3) * 3;
    boxCol = Math.floor(column / 3) * 3;
    
    for (let r = 0; r < 3; r++){
        for (let c = 0; c < 3; c++){
            if (board[boxRow + r][boxCol + c] === value)
                return false;
        }
    }

    return true;
};


// Funkcja sprawdza wszystkie warunki
function checkValue(board, row, column, value) {
    if(checkRow(board, row, value) &&
      checkColumn(board, column, value) &&
      checkSquare(board, row, column, value)) {
        return true;
    }
    
    return false; 
};


//Funkcja która ostatecznie rozwiązuje sudoku na bazie składowych funkcji. 
function solve(board) {  
    let emptySpot = nextEmptySpot(board);
    let row = emptySpot[0];
    let col = emptySpot[1];

    // there is no more empty spots
    if (row === -1){
        return board;
    }

    for(let num = 1; num<=9; num++){
        if (checkValue(board, row, col, num)){
            board[row][col] = num;
            solve(board);
        }
    }

    if (nextEmptySpot(board)[0] !== -1)
        board[row][col] = 0;

    return board;
}

// Ostatnia funkcja któa wywołuje algorytm rozwiązujący sudoku i wizualizuje rozwiązanie w postaci stringów.
function showSudoku()
{
    solve(board);
    for( let i=0; i<board.length; i++ )
    {
        console.log( board[i].toString() );
    }
    console.log('');
}


showSudoku();