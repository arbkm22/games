import React from 'react';

function Main() {

    const handleClick = (e) => {
        console.log('cell clicked');
        
    }
    
    return (
        <div className='body'>
            <div className='board'>
                <div className='row'>
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell' onClick={handleClick}></div>
                </div>
                <div className='row'>
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell' onClick={handleClick}></div>
                </div>
                <div className='row'>
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell' onClick={handleClick}></div>
                    <div className='cell' onClick={handleClick}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;