import React from "react";
import './keyboard.css';
import Chars from "./Chars";

function Keyboard(props) {
    const qwertyLayout =  [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

    // * map => creates a new array by calling function on every 
    // * element of the original array.
    // * Stores the results in a new array. 
    // * Returns the new array, and the original array is unchanged.

    return (
        <>
            <div className="keyboard">
                {(() => {
                    let rowKeys = [];
                    for (let i=0; i<qwertyLayout[props.layoutRow].length; i++) {
                        if (props.layoutRow === 0) {
                            rowKeys.push(<Chars key={firstRow[i]} letter={firstRow[i]} />);
                        }
                        else if (props.layoutRow === 1) {
                            rowKeys.push(<Chars key={secondRow[i]} letter={secondRow[i]} />);
                        }
                        else if (props.layoutRow === 2) {
                            rowKeys.push(<Chars key={thirdRow[i]} letter={thirdRow[i]} />);
                        }
                    }
                    return rowKeys;
                })()}
            </div>
        </>
    );
}

export default Keyboard;