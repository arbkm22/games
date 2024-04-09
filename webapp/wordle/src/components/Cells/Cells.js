import React, { useState } from "react";
import './Cells.css';

function Cells() {

    const [inputValue, setInputValue] = useState("");
    const [whichKey, setWhichKey] = useState("");

    const handleKeyDown = (event) => {
        setWhichKey(event.key);
    }

    const handleChange = (event) => {
        if (inputValue.length >= 1 && whichKey !== "Backspace")
            return;
        setInputValue(event.target.value);
    }

    return (
        <div className="cell-container">
            <input className="cells" type="text" value={inputValue} onChange={handleChange}  onKeyDown={handleKeyDown} />
        </div>
    )
}

export default Cells;