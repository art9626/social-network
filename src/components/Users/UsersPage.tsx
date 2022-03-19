import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, FilterType, getUsersListThunk } from "../../redux/usersPageReducer";
import Preloader from "../common/Preloader/Preloader";
import { getCurrentPage, getFilter, getIsFetching, getPageSize, getTotalCount } from "../../redux/usersSelecrors";
import { Search } from "./Search/Search";
import { Users } from "./Users";
import { Pagination } from "../common/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";


const UsersPage: React.FC = React.memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = useSelector(getFilter);
  const totalCount = useSelector(getTotalCount);
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const isFetching = useSelector(getIsFetching);

  const dispatch = useDispatch();

  const setFilter = (filter: FilterType, page: number) => dispatch(actions.setFilter(filter, page));
  const setCurrentPage = (page: number) => dispatch(actions.setCurrentPage(page));
  const getUsersList = (
    pageSize: number,
    currentPage: number,
    searchValue: string,
    followersFilter: boolean | null
  ) => dispatch(getUsersListThunk(pageSize, currentPage, searchValue, followersFilter));



  useEffect(() => {
    if (filter) {
      getUsersList(pageSize, currentPage, filter.term, filter.friend);

      const actualSearchParams: { term?: string, friend?: string, page?: string } = {};

      if (filter.term) {
        actualSearchParams.term = filter.term;
      }
      if (typeof filter.friend === 'boolean') {
        actualSearchParams.friend = String(filter.friend);
      }
      if (currentPage > 1) {
        actualSearchParams.page = String(currentPage);
      }

      setSearchParams(actualSearchParams);
    }
  }, [filter, currentPage]);

  
  useEffect(() => {
    if (!filter) {
      const term = searchParams.get('term') || '';
      const friend = searchParams.get('friend') === 'true' ? true : searchParams.get('friend') === 'false' ? false : null;
      const page = searchParams.get('page') || '1';
      const filterValues: FilterType = { term, friend };
  
      setFilter(filterValues, +page);
    }

    return () => {
      setFilter({ term: '', friend: null }, 1);
    };
  }, []);



  return (
    <>
      {
        filter
          ? <>
              <Search
                filter={filter}
                setFilter={setFilter}
              />

              {
                isFetching
                  ? <Preloader />
                  : <>
                    <Pagination
                      totalCount={totalCount}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      portionSize={20}
                      filter={filter as FilterType}
                    />
                    <Users />
                  </>
              }
            </>
          : null
      }
    </>
  )
});


export default UsersPage;