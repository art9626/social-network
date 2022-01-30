import React, { useState } from 'react';
import classes from './Pagination.module.css'
import classNames from 'classnames';

type PaginationPropsType = {
  totalCount: number | null
  pageSize: number
  currentPage: number
  portionSize?: number
  onPageClick: (page: number) => void
}

const Pagination: React.FC<PaginationPropsType> = ({ totalCount, pageSize, currentPage, onPageClick, portionSize = 10 }) => {
  const [portionNumber, setPortionNumber] = useState(1);

  if (!totalCount) return null;
  
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages: Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
                className={classNames(classes.pageItem, { [classes.selectedPage]: item === currentPage } )}
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