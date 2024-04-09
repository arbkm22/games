import React, { useState } from 'react';
import './Wordle.css';
import Keyboard from '../Keyboard/Keyboard.js';
import Cells from '../Cells/Cells.js';

function Wordle() {
    const rows = 5;
    const cols = 6;

    return (
        <>
            <div className="wordle">
                {Array.from({ length: rows }, (_, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {Array.from({ length: cols }, (_, colIndex) => (
                            <div key={colIndex} className="box">
                                <Cells />
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