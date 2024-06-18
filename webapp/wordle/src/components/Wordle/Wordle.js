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

    const updateKeyMap = (keyMap, userInput, color) => {
        const newCopy = keyMap;
        newCopy.set(userInput, color);
        setKeyMap(newCopy);
    }

    const handleWord = (row, col) => {
        setKeyMap(new Map());
        if (word === userInput) {
            setCurrentIndex(prevIndex => prevIndex + 1);
            console.log('word matched: ', word);
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
            if (keyMap.has(userInput[i])) {
                if (arr[i] === "gray") {
                    if (arr[i] === "yellow" || arr[i] === "green") {
                        updateKeyMap(keyMap, userInput[i], arr[i]);
                    }
                }
                else if (arr[i] === "yellow") {
                    console.log("yellow");
                    if (arr[i] === "green") {
                        updateKeyMap(keyMap, userInput[i], arr[i]);
                    }
                }
                
            } else if (!keyMap.has(userInput[i])) {
                updateKeyMap(keyMap, userInput[i], arr[i]);
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