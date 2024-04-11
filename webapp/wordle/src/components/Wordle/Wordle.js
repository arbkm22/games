import React, { useState } from 'react';
import './Wordle.css';
import Keyboard from '../Keyboard/Keyboard.js';
import Cells from '../Cells/Cells.js';

function Wordle() {
    const rows = 5;
    const cols = 6;

    const pos = {
        row: 0,
        col: 0
    }

    const [curPos, setCurPos] = useState(pos);
    const [userInput, setUserInput] = useState("");
    const [word, setWord] = useState("");

    const handleWordSelection = () => {
        console.log(word);
    }

    const handleChange = (data) => {
        console.log(`data: ${data.row} | ${data.col}`);
        let currentInput = userInput + data.value;
        setUserInput(currentInput);
        console.log('userInput: ', userInput);
    }

    const handleWord = (data) => {
        let answer;
        for (let i=0; i<5; i++) {
            answer += '';
        }
    }

    return (
        <>
            <div className="wordle">
                {Array.from({ length: rows }, (_, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {Array.from({ length: cols }, (_, colIndex) => (
                            <div key={colIndex} className="box">
                                <Cells col={colIndex} row={rowIndex} onChange={handleChange} onWord={handleWord} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Keyboard />
        </>
    )
}

export default Wordle;