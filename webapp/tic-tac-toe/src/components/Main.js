import React, { useEffect, useLayoutEffect, useState } from 'react';
import Cell from './Cell';

function Main() {

    const [turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState();
    const [isDraw, setIsDraw] = useState(false);
    const [reset, setReset] = useState(false);

    const checkWinner = (arr) => {
        let combos = {
            accros: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        };
        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (
                    arr[pattern[0]] === "" ||
                    arr[pattern[1]] === "" ||
                    arr[pattern[2]] === ""
                ) {
                } else if (
                    arr[pattern[0]] === arr[pattern[1]] && 
                    arr[pattern[1]] === arr[pattern[2]]
                ) {
                    setWinner(arr[pattern[0]]);
                }
            })
        }
    }

    const handleCellClick = (num) => {
        if (winner || cells[num] !== "") return;

        const arr = [...cells];
        arr[num] = arr[num] ? null : turn;
        setCells(arr);
        checkWinner(arr);
        if (!winner) 
            handleTurnChange();
        if (!arr.includes("") && !winner) {
            setIsDraw(true);
        }
    }

    const handleTurnChange = () => {
        setTurn(turn === "X" ? "O" : "X");
    }

    const resetGame = () => {
        setCells(Array(9).fill(""));
        setTurn("X");
        setWinner(null);
        setIsDraw(false);
        setReset(true);
    }

    return (
        <div className='body'>
            <div className={`winner ${winner || isDraw ? "show" : ""}`}>
                {winner ? `Winner is ${winner}` : isDraw ? "Its a draw" : ""}
            </div> 
            <div className='board'>
                <div className='row'>
                    <Cell 
                        num={0} 
                        value={cells[0]} 
                        hasWon={winner} 
                        onCellClick={handleCellClick} 
                        reset={reset} />
                    <Cell 
                        num={1} 
                        value={cells[1]} 
                        hasWon={winner} 
                        onCellClick={handleCellClick}
                        reset={reset} />
                    <Cell 
                        num={2} 
                        value={cells[2]} 
                        hasWon={winner} 
                        onCellClick={handleCellClick} 
                        reset={reset} />
                </div>
                <div className='row'>
                    <Cell 
                        num={3} 
                        value={cells[3]} 
                        hasWon={winner} 
                        onCellClick={handleCellClick}
                        reset={reset} />
                    <Cell 
                        num={4} 
                        value={cells[4]} 
                        hasWon={winner} 
                        onCellClick={handleCellClick}
                        reset={reset} />
                    <Cell 
                        num={5} 
                        value={cells[5]} 
                        hasWon={winner} 
                        onCellClick={handleCellClick}
                        reset={reset} />
                </div>
                <div className='row last-row'>
                    <Cell 
                        num={6} 
                        value={cells[6]} 
                        hasWon={winner} 
                        onCellClick={handleCellClick}
                        reset={reset} />
                    <Cell 
                        num={7} 
                        value={cells[7]} 
                        hasWon={winner} 
                        onCellClick={handleCellClick}
                        reset={reset} />
                    <Cell 
                        num={8} 
                        value={cells[8]} 
                        hasWon={winner} 
                        onCellClick={handleCellClick}
                        reset={reset} />
                </div>
            </div>
            <div className="resetButton"> 
                <button onClick={resetGame}>Reset Game</button>
            </div>
        </div>
    );
}

export default Main;