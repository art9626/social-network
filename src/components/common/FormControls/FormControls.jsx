import React from 'react';
import classes from './FormControls.module.css'
import classNames from 'classnames';


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
        className={classNames(inputTypeClass, { [classes.error]: touched && error })}
      />


      {touched && (error && <span className={classes.errorMessage}> {error} </span>)}
    </div>
  );
}