import React from 'react';
import classes from './Message.module.css'


const Message = props => {
  const classFrom = `${classes.message} ${classes.from}`;
  const classTo = `${classes.message} ${classes.to}`;


  return (
    <div className={props.status === 'from' ? classFrom : classTo} >
      {props.text}
    </div>
  )
}

export default Message;