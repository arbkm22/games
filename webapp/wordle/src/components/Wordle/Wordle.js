import React, { useState } from 'react';
import './Wordle.css';
import Keyboard from '../Keyboard/Keyboard.js';

function Wordle() {
    const rows = 5;
    const cols = 6;

    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === "Backspace") {
            console.log('backspace was pressed');
        }
        console.log('inputValue: ', inputValue);
        console.log('event val: ', event.target.value);
    }

    const handleChange = (event) => {
        // if (inputValue.length > 1) return;
        if (event.key === "Backspace") {
            console.log('backspace was pressed');
        }
        setInputValue(event.target.value);
    }

    return (
        <>
            <div className="wordle">
                {Array.from({ length: rows }, (_, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {Array.from({ length: cols }, (_, colIndex) => (
                            <div key={colIndex} className="box">
                                <input className="cells" type="text" value={inputValue} onChange={handleChange}  onKeyDown={handleKeyDown} />
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