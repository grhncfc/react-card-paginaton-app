import React from 'react';
import './Input.css'

function Input(props) {
    const obj = {
        a1: 5,
        a2: 10
    };
    const arr = [1,2,3];
    const newArr = [...arr];

    const defaultChange = e => {
        e.preventDefault();
        props.onChange(e);
    };

    return (
           <input {...props} onChange={defaultChange} />
    );
}

export default Input;
