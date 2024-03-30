import React, { useState } from 'react';
import xImage from '../assets/X.png';
import oImage from '../assets/O.png';
import Cell from './Cell';

function Main() {

    // * Variables
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState();
    const [isDraw, setIsDraw] = useState(false);

    const handleClick = (num) => {
        let arr = [...cells];
        if (turn === 'X') {
            arr[num] = "X";
            setTurn("O"); 
        }
        else {
            arr[num] = "O"
            setTurn("O");
        }
        setCells(arr);
    }

    const handleTurnChange = () => {
        setTurn(turn === "X" ? "O" : "X");
    }

    return (
        <div className='body'>
            <div className='board'>
                <div className='row'>
                    <Cell num={1} turn={turn} onTurnChange={handleTurnChange} />
                    <Cell num={2} turn={turn} onTurnChange={handleTurnChange} />
                    <Cell num={3} turn={turn} onTurnChange={handleTurnChange} />
                </div>
                <div className='row'>
                    <Cell num={4} turn={turn} onTurnChange={handleTurnChange} />
                    <Cell num={5} turn={turn} onTurnChange={handleTurnChange} />
                    <Cell num={6} turn={turn} onTurnChange={handleTurnChange} />
                </div>
                <div className='row last-row'>
                    <Cell num={7} turn={turn} onTurnChange={handleTurnChange} />
                    <Cell num={8} turn={turn} onTurnChange={handleTurnChange} />
                    <Cell num={9} turn={turn} onTurnChange={handleTurnChange} />
                </div>
            </div>
        </div>
    );
}

export default Main;