import React from 'react';
import classes from './News.module.css'

const News: React.FC = () => {
  return (
    <div>
      <h1 className={classes.header}>
        News
      </h1>
      <p>The best news in the world!</p>
    </div>
  );
}

export default News;