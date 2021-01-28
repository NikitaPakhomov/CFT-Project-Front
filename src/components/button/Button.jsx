import React from 'react';
import './Button.scss';

const Button = (props) => {
    return <div className="button" onClick={() => props.setActiveTrailer(0)}>{props.text}</div>;
}


export default Button;

