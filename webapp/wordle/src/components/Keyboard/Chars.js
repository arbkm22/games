import React from "react";

function Chars(props) {  

    const handleClick = () => {
        console.log('letter: ', props.letter);
    }

    return (
        <div className={`char ${props.color}`} onClick={handleClick}>
            {props.letter}
        </div>
    )
}

export default Chars;