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
                    let newMap = props.keyMap;
                    for (let i=0; i<qwertyLayout[props.layoutRow].length; i++) {
                        let color = "";
                        if (props.layoutRow === 0) {
                            if (newMap.has(firstRow[i])) {
                                color = newMap.get(firstRow[i]);
                            }
                            rowKeys.push(<Chars key={firstRow[i]} letter={firstRow[i]} color={color} />);
                        }
                        else if (props.layoutRow === 1) {
                            if (newMap.has(secondRow[i])) {
                                color = newMap.get(secondRow[i]);
                            }
                            rowKeys.push(<Chars key={secondRow[i]} letter={secondRow[i]} color={color} />);
                        }
                        else if (props.layoutRow === 2) {
                            if (newMap.has(thirdRow[i])) {
                                color = newMap.get(thirdRow[i]);
                            }
                            rowKeys.push(<Chars key={thirdRow[i]} letter={thirdRow[i]} color={color} />);
                        }
                    }
                    return rowKeys;
                })()}
            </div>
        </>
    );
}

export default Keyboard;