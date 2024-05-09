import React from "react";
import './keyboard.css';
import Chars from "./Chars";

function Keyboard(props) {
    const qwertyLayout =  [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    const chars = ["A", "B", "C"];

    const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

    const list = [1, 2, 3]

    const handleClick = () => {
        console.log('handleCick clicked');
        chars.map((item, index) => {
            console.log('item: ', item);
        });
    }

    // * map => creates a new array by calling function on every 
    // * element of the original array.
    // * Stores the results in a new array. 
    // * Returns the new array, and the original array is unchanged.

    return (
        <>
            <div className="keyboard">
                {(() => {
                    let rowKeys = [];
                    console.log('props: ', props);

                    for (let i=0; i<qwertyLayout[props.layoutRow].length; i++) {
                        if (props.layoutRow === 0) {
                            rowKeys.push(<Chars key={1} letter={firstRow[i]} />)
                        }
                        else if (props.layoutRow === 1) {
                            rowKeys.push(<Chars key={1} letter={secondRow[i]} />)
                        }
                        else if (props.layoutRow === 2) {
                            rowKeys.push(<Chars key={1} letter={thirdRow[i]} />)
                        }
                    }
                    return rowKeys;
                })()}
            </div>
        </>
    );
}

export default Keyboard;