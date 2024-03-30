import React, { useState } from 'react';
import Cell from './Cell';

function Main() {

    const [turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(""));

    const handleCellClick = (num) => {
        const arr = [...cells];
        arr[num] = arr[num] ? null : turn;
        setCells(arr);
        handleTurnChange();
    }

    const handleTurnChange = () => {
        setTurn(turn === "X" ? "O" : "X");
    }

    return (
        <div className='body'>
            <div className='board'>
                <div className='row'>
                    <Cell num={1} value={cells[1]} onCellClick={handleCellClick} />
                    <Cell num={2} value={cells[2]} onCellClick={handleCellClick} />
                    <Cell num={3} value={cells[3]} onCellClick={handleCellClick} />
                </div>
                <div className='row'>
                    <Cell num={4} value={cells[4]} onCellClick={handleCellClick} />
                    <Cell num={5} value={cells[5]} onCellClick={handleCellClick} />
                    <Cell num={6} value={cells[6]} onCellClick={handleCellClick} />
                </div>
                <div className='row last-row'>
                    <Cell num={7} value={cells[7]} onCellClick={handleCellClick} />
                    <Cell num={8} value={cells[8]} onCellClick={handleCellClick} />
                    <Cell num={9} value={cells[9]} onCellClick={handleCellClick} />
                </div>
            </div>
        </div>
    );
}

export default Main;