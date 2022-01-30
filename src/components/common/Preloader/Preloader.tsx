import React from "react";
import classes from './Preloader.module.css';

const Preloader: React.FC = () => {
  return (
    <div className={classes.ldsRipple}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Preloader;
