import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterType, SetCurrentPageType, SetFilterType } from '../redux/usersPageReducer';


export const withSearchParams = <P extends { filter: FilterType | null, setFilter: SetFilterType, setCurrentPage: SetCurrentPageType }>(WrappedComponent: React.ComponentType<P>) => {
  const WithSearchParamsComponent: React.FC<Omit<P, 'FilterType' | 'SetFilterType' | 'SetCurrentPageType'>> = (
    {
      filter,
      setFilter,
      setCurrentPage,
      ...props
    }) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const termParam = searchParams.get('term') || '';
    const friendParam = searchParams.get('friend') === 'true' ? true : searchParams.get('friend') === 'false' ? false : null;
    const pageParam = searchParams.get('page') || '1';

    const filterValues: FilterType = { term: termParam, friend: friendParam };

    if (!filter) {
      setFilter(filterValues);
      setCurrentPage(+pageParam)
      
      return null;
    } else {
      return <WrappedComponent {...props as P} filter={filter} setFilter={setFilter} setCurrentPage={setCurrentPage} />;
    }
  }

  return React.memo(WithSearchParamsComponent);
}
