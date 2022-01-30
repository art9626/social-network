import React from 'react';
import classes from './FormControls.module.css'
import classNames from 'classnames';
import { WrappedFieldProps } from 'redux-form';

type TextareaPropsType = WrappedFieldProps & {placeholder: string}

export const Textarea: React.FC<TextareaPropsType> = ({ input, meta: { touched, error }, placeholder }) => {
  return (
    <div className={classes.formControl}>
      <textarea
        {...input}
        placeholder={placeholder}
        className={touched && error ? `${classes.error} ${classes.formControlTextarea}` : classes.formControlTextarea}>
      </textarea>
      {touched && (error && <span className={classes.errorMessage}> {error} </span>)}
    </div>
  );
}

type InputPropsType = WrappedFieldProps & {type: string, label: string}

export const Input:  React.FC<InputPropsType> = ({ input, meta: { touched, error }, type, label }) => {
  const inputTypeClass = type === 'checkbox' ? classes.formControlCheckbox : classes.formControlInput;

  return (
    <div className={classes.formControl}>
      <label>{label}</label>
      <input
        {...input}
        type={type}
        className={classNames(inputTypeClass, { [classes.error]: touched && error })}
      />


      {touched && (error && <span className={classes.errorMessage}> {error} </span>)}
    </div>
  );
}