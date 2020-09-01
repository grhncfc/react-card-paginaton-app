import React from 'react';
import './Form.css'

function Form(props) {

    const defaultSubmit = e => {
        e.preventDefault();
        props.onSubmit(e);
    }
    return (
        <form className={"formStyle"} onSubmit={defaultSubmit}>
            {props.children}
            <input className={"submitInput"} type="submit" value={"Submit"} />
        </form>
    );
}

export default Form;