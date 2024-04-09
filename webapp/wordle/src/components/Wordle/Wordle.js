import React, { useState } from 'react';
import './Wordle.css';
import Keyboard from '../Keyboard/Keyboard.js';

function Wordle() {
    const rows = 5;
    const cols = 6;

    const [inputValue, setInputValue] = useState("");
    const [whichKey, setWhichKey] = useState("");

    const handleKeyDown = (event) => {
        setWhichKey(event.key);
    }

    const handleChange = (event) => {
        if (inputValue.length >= 1 && whichKey !== "Backspace")
            return;
        else 
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