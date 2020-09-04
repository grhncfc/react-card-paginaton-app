import React, { useRef, useState} from 'react';
import styles from './Input.module.css'


function Input(props) {
    const inputRef = useRef({});

    const defaultChange = e => {
        e.preventDefault();
        props.onChange(e);
    };

    return (
           <input {...props} onChange={defaultChange} />
    );
}

export default Input;