import React, { useEffect, useRef, useState } from "react";
import './Cells.css';

function Cells(props) {
    
    // TODO: write comments for me ffs

    const [currentCellValue, setCurrentCellValue] = useState("");
    const [cellColor, setCellColor] = useState("");
    const [whichKey, setWhichKey] = useState("");
    const [currentCellColor, setCurrentCellColor] = useState("");
    const inputRef = useRef(null);

    const handleKeyDown = (event) => {
        setWhichKey(event.key);
        console.log('handleKeyDown: ', event.key);
        if ((currentCellValue !== undefined || currentCellValue !== null) &&
            event.key === "Enter" &&  
            (props.row === 4)
        ) {
            props.onWord(props.row, props.col);
            moveToNextCol(props.col);
        }
        if (event.key === "Backspace" && 
            (currentCellValue !== undefined || currentCellValue !== null)) {
            // handleBackspace(event);
            handleChange(event);
            // document.getElementById(`${props.row - 1}-${props.col}`).focus();
        }
    }

    const handleBackspace = (event) => {
        console.log('handleBackspace');
        if (props.row > 4) {
            document.getElementById(`${props.row - 1}-${props.col}`).focus();
        }

        let data = {
            col: props.col,
            row: props.row,
            value: event.target.value,
            key: whichKey
        };
        props.onChange(data);
    }
    
    useEffect(() => {
        setCellColor(props.color);
    });

    const moveToNextCol = (currCol) => {
        if (currCol < 5) {
            document.getElementById(`0-${props.col + 1}`).focus();
        }
    }

    const handleChange = (event) => {
        console.log('Cells | handleChange'); 
        // if (event.key === "Backspace") {
        //     console.log('backspace pressed');
        //     document.getElementById(`${props.row - 1}-${props.col}`).focus();
        //     // return;
        // }
        if (currentCellValue.length >= 1 && whichKey !== "Backspace") {
            if (props.row < 4) {
                document.getElementById(`${props.row + 1}-${props.col}`).focus();
            }
            return;
        }
        
        let data = {
            col: props.col,
            row: props.row,
            value: event.target.value,
            key: whichKey
        };

        setCurrentCellValue(event.target.value);
        // handle backspace
        if (whichKey === "Backspace" && props.row !== 0) {
            document.getElementById(`${props.row - 1}-${props.col}`).focus();
        }
        if (event.target.value.length === 1) {
            if (whichKey !== "Backspace") {
                if (props.row < 4) {
                    console.log('cells| handleChange: inside if backspace');
                    document.getElementById(`${props.row + 1}-${props.col}`).focus();
                }
            }
            if (whichKey === "Backspace") {
                if (props.row !== 0) {
                    document.getElementById(`${props.row - 1}-${props.col}`).focus();
                }
            }
            
        }
        props.onChange(data);
    }

    return (
        <div className="cell-container">
            <input 
                className={`cells cells-${cellColor}`}
                id={`${props.row}-${props.col}`} 
                ref={inputRef} 
                type="text" 
                value={currentCellValue} 
                onChange={handleChange}  
                onKeyDown={handleKeyDown} 
                autoComplete="off"
            />
        </div>
    )
}

export default Cells;