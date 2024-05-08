import React from "react";
import './keyboard.css';
import Chars from "./Chars";

function Keyboard() {
    const qwertyLayout = [
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
                    let element= [];
                    for (let i=0; i<3; i++) {
                        let eleSub = [];
                        if (i = 0) {
                            for (let j=0; j<firstRow.length; j++) {
                                eleSub.push(<Chars letter={firstRow[j]} />);
                            }
                        }
                        if (i = 1) {
                            for (let k=0; k<secondRow.length; k++) {
                                eleSub.push(<Chars letter={secondRow[k]} />);
                            }
                        }
                        if (i == 2) {
                            for (let l=0; l<thirdRow.length; l++) {
                                eleSub.push(<Chars letter={thirdRow[l]} />);
                            }
                        }
                        element.push(eleSub);
                        console.log('element: ', element);
                    }
                    return element;
                })()}
            </div>
        </>
    );
}

export default Keyboard;