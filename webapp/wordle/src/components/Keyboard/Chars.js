import React from "react";

function Chars(props) {  

    const handleClick = () => {
        let letter = props.letter;
        const data = new Object();
        data.key = letter;
        data.value = letter;
        props.registerKey(data);
    }

    return (
        <div className={`char ${props.color}`} onClick={handleClick}>
            {props.letter}
        </div>
    )
}

export default Chars;