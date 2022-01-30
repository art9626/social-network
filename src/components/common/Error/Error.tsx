import React from 'react';
import classes from './Error.module.css'

type ErrorPropsType = {
  errorMessage: string
}

const Error = ({ errorMessage }: ErrorPropsType): JSX.Element => {
  return (
    <div className={classes.item}>{errorMessage}</div>
  );
}

export default Error; 