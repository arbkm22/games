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

    const handleChange = (data) => {
        let currentInput = userInput;
        if (data.key === "Backspace") {
            let words = currentInput.split("");
            words.pop();
            currentInput = words.join("");
        }
        else {
            currentInput += data.value;
        }
        setUserInput(currentInput);
    }

    const handleWord = () => {
        console.log('handleWord: ', userInput);
    }

    return (
        <>
            <div className="wordle">
                {Array.from({ length: rows }, (_, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {Array.from({ length: cols }, (_, colIndex) => (
                            <div key={colIndex} className="box">
                                <Cells 
                                    col={colIndex} 
                                    row={rowIndex} 
                                    onChange={handleChange} 
                                    onWord={handleWord} 
                                />
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