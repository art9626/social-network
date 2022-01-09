import React, { useState } from 'react';
import classes from './Pagination.module.css'


const Pagination = ({ totalCount, pageSize, currentPage, onPageClick, portionSize = 10 }) => {

  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const [portionNumber, setPortionNumber] = useState(1);
  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftSidePageNumber = (portionNumber - 1) * portionSize + 1;
  const rightSidePageNumber = portionNumber * portionSize;

  return (
    <div className={classes.pagination}>
      {
        portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
      }

      <ul className={classes.paginationList}>
        {pages
          .filter(item => item >= leftSidePageNumber && item <= rightSidePageNumber)
          .map(item => {
            return (
              <li
                key={item}
                className={item === currentPage ? `${classes.pageItem} ${classes.selectedPage}` : classes.pageItem}
                onClick={() => onPageClick(item)}
              >
                {item}
              </li>
            );
          })}
      </ul>

      {
        portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
      }
    </div>
  )


}

export default Pagination;