import React from 'react';
import styles from './Form.module.css'

function Form(props) {

    const defaultSubmit = e => {
        e.preventDefault();
        props.onSubmit(e);
    }
    return (
        <form className={styles.formStyle} onSubmit={defaultSubmit}>
            {props.children}
            <input className={styles.submitInput} type="submit" value={"Submit"} />
        </form>
    );
}

export default Form;