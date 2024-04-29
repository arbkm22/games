import React, { useState } from 'react';
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

    const getNewWord = () => {
        const word = words[currentIndex];
        setCurrentIndex(currentIndex + 1);
        console.log('word: ', word);
        return word;
    }

    const handleChange = (data) => {
        // console.log('data in handleChnage: ', data);
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

    const handleWord = (row, col) => {
        // console.log(`word: ${word} | userInput: ${userInput}`);
        console.log('result: ', result);
        console.log(`row: ${row} | col: ${col}`);
        if (word === userInput) {
            console.log('word matched');
        }
        else {
            console.log('word did not matched');
        }
        let arr = Array(5).fill("");
        // let matrix = [...result];
        // matrix[0][1] = "H";
        console.log(arr);
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
        }
        // console.log('matrix: ', matrix);
        let newRes = result.map(row => [...row]);
        newRes[col] = arr;
        console.log('newRes: ', newRes);

        try {
            setResult(newRes);
        } catch (e) {
            console.log('e: ', e);
        }
        // setResult(matrix);
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
                                    color={result[colIndex]}
                                    currentCol={currentCol}
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