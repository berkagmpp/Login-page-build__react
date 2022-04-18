import React, { useRef, useImperativeHandle } from "react";

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {    // When attaching 'ref' to the component, wrap componen with forwardRef().
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    }

    // parameter: useImperativeHandle(ref, a function which returns object(funtions or variables))
    useImperativeHandle(ref, () => {
        return {
            focussing: activate   //  pass 'activate' function to the name of 'focussing'
        };
    });

    return (
        <div
            className={`${classes.control} 
                        ${props.isValid === false ? classes.invalid : ''
                      }`}
        >
            <label htmlFor="{props.id}">{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;