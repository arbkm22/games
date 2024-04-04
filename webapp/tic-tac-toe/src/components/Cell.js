import React, { useState, useLayoutEffect } from "react";

function Cell(props) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (props.hasWon || isClicked) return;
        props.onCellClick(props.num);
        if (!isClicked) {
            setIsClicked(true);
        }
    }

    const cellClassName = () => {
        let text;
        if (props.num === 2 || props.num === 5 || props.num === 8) {
            text = 'last-cell'
        }
        if (isClicked && !props.reset) {
            if (props.value === "X")
                return `cell cell-x ${text}`;
            else 
                return `cell cell-o ${text}`;
            }
        else  {
            return `cell ${text}`;
        }
    }

    return (
        <div className={cellClassName()} onClick={handleClick}>
        </div>
    )
}

export default Cell;