import React from 'react';
import classes from './FormControls.module.css'


export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  return (
    <div className={classes.formControl}>
      <textarea
        {...input}
        {...props}
        className={touched && error ? `${classes.error} ${classes.formControlTextarea}` : classes.formControlTextarea}>
      </textarea>
      {touched && (error && <span className={classes.errorMessage}> {error} </span>)}
    </div>
  );
}

export const Input = ({ input, meta: { touched, error }, type, label }) => {
  const inputTypeClass = type === 'checkbox' ? classes.formControlCheckbox : classes.formControlInput;

  return (
    <div className={classes.formControl}>
      <label>{label}</label>
      <input
        type={type}
        {...input}
        className={touched && error ? `${classes.error} ${inputTypeClass}` : inputTypeClass}>
      </input>
      {touched && (error && <span className={classes.errorMessage}> {error} </span>)}
    </div>
  );
}