import React, { useState } from 'react';
import xImage from '../assets/X.png';
import oImage from '../assets/O.png';

function Main() {

    // * Variables
    const [turn, setTurn] = useState('X');

    const handleClick = (e) => {
        if (turn === 'X')
            setTurn('O'); 
        else 
            setTurn('X');
        console.log('turn: ', turn);
    }

    const Cell = ({ num }) => {
        // const celValue = 
        const cellClassName = () => {
            if (turn === 'X')
                return 'cell cell-x';
            else 
                return 'cell cell-o';
        }

        const cellStyle = {
            backgroundImage: `url($(turn === 'X' ? xImage : oImage))`,
            backgroundSize: 'cover'
        }
        return (
            <div className={cellClassName()} style={cellStyle}></div>
        )
    }

    return (
        <div className='body'>
            <div className='board'>
                <div className='row'>
                    <Cell num={0} />
                    {/* <div className='cell' onClick={handleClick}></div> */}
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell last-cell' onClick={handleClick}></div>
                </div>
                <div className='row'>
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell last-cell' onClick={handleClick}></div>
                </div>
                <div className='row last-row'>
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell last-cell' onClick={handleClick}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;