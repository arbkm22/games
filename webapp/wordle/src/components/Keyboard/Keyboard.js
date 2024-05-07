import React from "react";
import './keyboard.css';

function Keyboard() {
    const qwertyLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    const chars = ["A", "B", "C"];
    const list = [1, 2, 3]

    const handleClick = () => {
        console.log('handleCick clicked');
        chars.map((item, index) => {
            console.log('item: ', item);
        });
    }

    // * map => creates a new array by calling function on every element of the original array.
    // * Stores the results in a new array. 
    // * Returns the new array, and the original array is unchanged.

    return (
        <>
            <div className="keyboard">
                <div className="char" onClick={handleClick}>  
                    {chars.map((item, index) => {
                        <div>{item}</div>
                    })}
                </div>  
            </div>
        </>
    );
}

export default Keyboard;