import React from 'react';
import classes from './Error.module.css'

const Error = ({ errorMessage }) => {
  return (
    <div className={classes.item}>{errorMessage}</div>
  );
}

export default Error; 