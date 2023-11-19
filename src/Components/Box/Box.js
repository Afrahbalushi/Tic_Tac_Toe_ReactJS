import { useState } from 'react';
import './Box.css'
export const Box = (props) => {
    let [currentSymbol, setCurrentSymbol] = useState("-");
    return <h2 className='Box' onClick={() => {
        setCurrentSymbol(props.currMove);
        props.setMove(props.currMove === "X" ? "O" : "X");
    }}>
{currentSymbol}
    </h2>
};