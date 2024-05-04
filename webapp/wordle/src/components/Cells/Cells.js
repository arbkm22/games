import React, { useEffect, useRef, useState } from "react";
import './Cells.css';

function Cells(props) {
    
    // TODO: write comments for me ffs

    const [currentCellValue, setCurrentCellValue] = useState("");
    const [cellColor, setCellColor] = useState("")
    const [whichKey, setWhichKey] = useState("");
    const [currentCellColor, setCurrentCellColor] = useState("");
    const inputRef = useRef(null);

    const handleKeyDown = (event) => {
        setWhichKey(event.key);
        // if (event.key === "Backspace") {
        //     document.getElementById(`${props.row - 1}-${props.col}`).focus();            
        // }
        if ((currentCellValue !== undefined || currentCellValue !== null) &&
            event.key === "Enter" &&  
            (props.row === 4)
        ) {
            props.onWord(props.row, props.col);
            moveToNextCol(props.col);
        }
    }
    
    useEffect(() => {
        // console.log(`props: ${props.row} | ${props.col}`);
        // console.log(`currentRow: ${props.currentRow}`);
        // if (props.col === props.currentCol) {
        //     setCellColor(props.color);
        // }
        setCellColor(props.color);
    });

    const handleWord = () => {
        
    }

    const moveToNextCol = (currCol) => {
        if (currCol < 5) {
            document.getElementById(`0-${props.col + 1}`).focus();
        }
    }

    const handleChange = (event) => {
        // console.log('whichKey: ', whichKey);
        // console.log('props: ', props);
        // if (props.row)
        // console.log('handleChange Cell: ', event.target.value);
        // console.log(`row: ${props.row} | col: ${props.col}`);
        // if (whichKey == "Backspace") {
        //     console.log('backspace was perssed');
        // }

        // if (whichKey === "Enter") {
        //     console.log('enter');
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
        if (whichKey === "Backspace" && props.row !== 0) {
            document.getElementById(`${props.row - 1}-${props.col}`).focus();
        }
        if (event.target.value.length === 1) {
            // console.log('props.row: ', props.row);
            if (props.row < 4) {
                // console.log('props.row: ', props.row);
                document.getElementById(`${props.row + 1}-${props.col}`).focus();
            }
        }

        props.onChange(data);
    }

    const checkColor = () => {
        // if (props.row === currentRow && props.col === currentCol) {
        //     setCurrentCellColor(props.color);
        // }
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