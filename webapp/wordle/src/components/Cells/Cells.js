import React, { useRef, useState } from "react";
import './Cells.css';

function Cells(props) {

    const [inputValue, setInputValue] = useState("");
    const [whichKey, setWhichKey] = useState("");
    const inputRef = useRef(null);

    const handleKeyDown = (event) => {
        setWhichKey(event.key);
    }

    const handleChange = (event) => {
        if (inputValue.length >= 1 && whichKey !== "Backspace")
            return;
        setInputValue(event.target.value);
        console.log(`Col: ${props.col} | Row: ${props.row}`);
        if (event.target.value.length === 1) {
            if (props.row < 4)
                document.getElementById(`${props.row + 1}-${props.col}`).focus();
        }

        props.onChange(props);
    }

    return (
        <div className="cell-container">
            <input className="cells" id={`${props.row}-${props.col}`} ref={inputRef} type="text" value={inputValue} onChange={handleChange}  onKeyDown={handleKeyDown} />
        </div>
    )
}

export default Cells;