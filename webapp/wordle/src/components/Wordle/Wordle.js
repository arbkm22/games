import React, { useEffect, useState } from 'react';
import './Wordle.css';
import Keyboard from '../Keyboard/Keyboard.js';
import Cells from '../Cells/Cells.js';
import words from '../Words/Words.json';

function Wordle() {
    const rows = 5;
    const cols = 6;

    const pos = {
        row: 0,
        col: 0
    }

    const [curPos, setCurPos] = useState(pos);
    const [userInput, setUserInput] = useState("");
    const [word, setWord] = useState(words[0].toUpperCase());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [result, setResult] = useState(Array(6).fill().map(() => Array(6).fill([])));
    const [currentCol, setCurrentCol] = useState(0);
    const [keyMap, setKeyMap] = useState(new Map());

    const handleChange = (data) => {
        console.log('Wordle | handleChange: ', data);
        let currentInput = userInput;
        if (data.key === "Backspace") {
            console.log('handleChange if');
            let userInput = currentInput.split("");
            userInput.pop();
            currentInput = userInput.join("");
        }
        else {
            currentInput += data.value;
        }
        setUserInput(currentInput.toUpperCase());
    }

    // TODO: reset the board
    const resetBoard = () => {
        console.log('resetBoard called');
    }

    useEffect(() => {
        let newWord = words[currentIndex];
        setWord(newWord.toUpperCase());
    }, [currentIndex]);

    const handleWord = (row, col) => {
        if (word === userInput) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
        else {
            console.log('word did not matched');
        }
        
        let arr = Array(5).fill("");
        for (let i=0; i<5; i++) {
            if (word[i] === userInput[i]) {
                arr[i] = "green";
            }
            if (word.includes(userInput[i]) && word[i] !== userInput[i]) {
                arr[i] = "yellow";
            }
            if (!word.includes(userInput[i])) {
                arr[i] = "gray";
            }
            if (!keyMap.has(arr[i])) {
                const newCopy = keyMap;
                newCopy.set(userInput[i], arr[i]);
                setKeyMap(newCopy);
            }
        }

        let newRes = result.map(row => [...row]);
        newRes[col] = arr;
        
        setResult(newRes);
        setUserInput("");
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
                                    color={result[colIndex][rowIndex]}
                                    currentCol={currentCol}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            
            <Keyboard layoutRow={0} keyMap={keyMap} callFunction={handleChange} />
            <Keyboard layoutRow={1} keyMap={keyMap} callFunction={handleChange} />
            <Keyboard layoutRow={2} keyMap={keyMap} callFunction={handleChange} />
        </>
    )
}

export default Wordle;