import React from 'react';
import classes from './Post.module.css';

type PropsType = {
  message: string;
  likeCount: number;
}

const Post: React.FC<PropsType> = ({ message, likeCount }) => {
  return (
    <li className={classes.item}>
      <img className={classes.avatar} src='https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/kartinka-na-avatar-dlya-devushki-9.jpg' />

      {message}

      <div>
        <span>{likeCount}</span>
        <button>Like</button>
      </div>
    </li>
  );
}

export default Post;