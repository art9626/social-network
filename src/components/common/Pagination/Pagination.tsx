import React, { useState } from 'react';
import classes from './Pagination.module.css'
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { FilterType, SetCurrentPageType } from '../../../redux/usersPageReducer';

type PaginationPropsType = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: SetCurrentPageType;
  portionSize?: number;
  filter: FilterType;
}

const Pagination: React.FC<PaginationPropsType> = ({ totalCount, pageSize, currentPage, portionSize = 10, setCurrentPage, filter }) => {

  const initialPortionNumber = Math.floor((currentPage - 1) / portionSize) + 1;
  const [portionNumber, setPortionNumber] = useState(initialPortionNumber);

  const [searchParams, setSearchParams] = useSearchParams()

  const filterParams = { term: filter.term, friend: String(filter.friend) };


  const onPageClick = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ ...filterParams, page: String(page) });
  };

  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages: Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftSidePageNumber = (portionNumber - 1) * portionSize + 1;
  const rightSidePageNumber = portionNumber * portionSize;

  return (
    <>
      {
        pagesCount > 1
          ? <div className={classes.pagination}>
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
                        className={classNames(classes.pageItem, { [classes.selectedPage]: item === currentPage })}
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
          : null
        }
    </>
  )


}

export default React.memo(Pagination);