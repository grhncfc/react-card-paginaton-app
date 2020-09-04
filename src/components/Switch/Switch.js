import React,{useState} from 'react';
import styles from './Switch.module.css'

const Switch = (props) => {

    return (
        <>
            <input {...props} checked={props.checked} onChange={props.onChange} type="checkbox" id="switch" className={styles.checkbox} />
            <label htmlFor="switch" className={styles.toggle}>  </label>
        </>
    );
};

export default Switch;