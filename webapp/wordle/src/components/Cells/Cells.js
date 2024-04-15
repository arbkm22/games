import React, { useRef, useState } from "react";
import './Cells.css';

function Cells(props) {
    
    // TODO: write comments for me ffs

    const [currentCellValue, setCurrentCellValue] = useState("");
    const [whichKey, setWhichKey] = useState("");
    const inputRef = useRef(null);

    const handleKeyDown = (event) => {
        setWhichKey(event.key);
        if (event.key === "Backspace") {
            // console.log('backspace');
            document.getElementById(`${props.row - 1}-${props.col}`).focus();            
        }
        if ((currentCellValue !== undefined || currentCellValue !== null) &&
            event.key === "Enter" &&  
            (props.row === 4)
        ) {
            console.log('enter pressed: ', props.row);
            props.onWord();
        }
    }

    const handleWord = () => {
        
    }

    const handleChange = (event) => {
        console.log('whichKey: ', whichKey);
        // console.log('handleChange Cell: ', event.target.value);
        // console.log(`row: ${props.row} | col: ${props.col}`);
        // if (whichKey == "Backspace") {
        //     console.log('backspace was perssed');
        // }

        // if (whichKey === "Enter") {
        //     console.log('enter');
        // }

        if (currentCellValue.length >= 1 && whichKey !== "Backspace") {
            document.getElementById(`${props.row + 1}-${props.col}`).focus();
            return;
        }
        
        let data = {
            col: props.col,
            row: props.row,
            value: event.target.value,
            key: whichKey
        };
        setCurrentCellValue(event.target.value);
        if (event.target.value.length === 1 && whichKey === "Enter") {
            handleWord(data);
        }
        if (event.target.value.length === 0 && whichKey === "Backspace" && props.row !== 0) {
            document.getElementById(`${props.row - 1}-${props.col}`).focus();
        }
        
        if (event.target.value.length === 1) {
            if (props.row < 4)
                document.getElementById(`${props.row + 1}-${props.col}`).focus();
        }

        props.onChange(data);
    }

    return (
        <div className="cell-container">
            <input 
                className="cells" 
                id={`${props.row}-${props.col}`} 
                ref={inputRef} 
                type="text" 
                value={currentCellValue} 
                onChange={handleChange}  
                onKeyDown={handleKeyDown} 
            />
        </div>
    )
}

export default Cells;