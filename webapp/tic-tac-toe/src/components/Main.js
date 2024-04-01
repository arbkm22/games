import React, { useState } from 'react';
import Cell from './Cell';

function Main() {

    const [turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState();

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
        if (winner || cells[num] !== "") {
            console.log('game has finished: ', winner);
            return;
        }

        const arr = [...cells];
        arr[num] = arr[num] ? null : turn;

        if (!winner)
            setCells(arr);

        checkWinner(arr);   

        if (!winner) 
            handleTurnChange();
    }

    const handleTurnChange = () => {
        setTurn(turn === "X" ? "O" : "X");
    }

    return (
        <div className='body'>
            <div className='board'>
                <div className='row'>
                    <Cell num={0} value={cells[0]} onCellClick={handleCellClick} />
                    <Cell num={1} value={cells[1]} onCellClick={handleCellClick} />
                    <Cell num={2} value={cells[2]} onCellClick={handleCellClick} />
                </div>
                <div className='row'>
                    <Cell num={3} value={cells[3]} onCellClick={handleCellClick} />
                    <Cell num={4} value={cells[4]} onCellClick={handleCellClick} />
                    <Cell num={5} value={cells[5]} onCellClick={handleCellClick} />
                </div>
                <div className='row last-row'>
                    <Cell num={6} value={cells[6]} onCellClick={handleCellClick} />
                    <Cell num={7} value={cells[7]} onCellClick={handleCellClick} />
                    <Cell num={8} value={cells[8]} onCellClick={handleCellClick} />
                </div>
            </div>
        </div>
    );
}

export default Main;