import React, { useState } from "react";

function Cell(props) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        console.log(`Cell #${props.num} clicked`);
        props.onCellClick(props.num);
        if (!isClicked) {
            setIsClicked(true);
        }
        else if (isClicked) {
            // TODO: handle when cell is already filled/clicked
            console.log('cell is already populated');
        }
    }

    const cellClassName = () => {
        let text;
        if (props.num === 3 || props.num === 6 || props.num === 9) {
            text = 'last-cell'
        }
        if (isClicked) {
            if (props.value === "X")
                return `cell cell-x ${text}`;
            else 
                return `cell cell-o ${text}`;
        }
        else {
            return `cell ${text}`;
        }
    }

    return (
        <div className={cellClassName()} onClick={handleClick}>
        </div>
    )
}

export default Cell;