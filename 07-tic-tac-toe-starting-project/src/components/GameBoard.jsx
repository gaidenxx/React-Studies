// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]

export default function GameBoard({ onSelectSquare, board }) {
    // let gameBoard = initialGameBoard;

    // for (const turn of turns) {
    //     const { square, player } = turn;
    //     const { row, col } = square;

    //     gameBoard[row][col] = player;
    // }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [
    //             ...prevGameBoard.map(innerArray => [...innerArray])
    //         ]; //Use to not change the original prev/initial value in memory (updated in immutable way)
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => 
                <li key={`row-${rowIndex}`}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => 
                            <li key={`col-${colIndex}`}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    )
}