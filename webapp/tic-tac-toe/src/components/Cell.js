import React from "react";

function Cell(props) {

    const handleClick = () => {
        console.log(`Cell #${props.num} clicked`);
        console.log(`turn: ${props.turn}`);
        props.onTurnChange();
        
    }

    const cellClassName = () => {
        let text;
        if (props.num === 3 || props.num === 6 || props.num === 9) {
            text = 'last-cell'
        }
        if (props.turn === "X")
            return `cell cell-x ${text}`;
        else 
            return `cell cell-o ${text}`;
    }

    return (
        <div className={cellClassName()} onClick={handleClick}>

        </div>
    )
}

export default Cell;