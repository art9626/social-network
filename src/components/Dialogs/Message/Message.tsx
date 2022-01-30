import React from 'react';
import classes from './Message.module.css'

type PropsType = {
  status: string;
  text: string;
}

const Message: React.FC<PropsType> = ({ status, text }) => {
  const classFrom = `${classes.message} ${classes.from}`;
  const classTo = `${classes.message} ${classes.to}`;


  return (
    <div className={status === 'from' ? classFrom : classTo} >
      {text}
    </div>
  )
}

export default Message;