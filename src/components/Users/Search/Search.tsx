import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterType, SetCurrentPageType, SetFilterType } from '../../../redux/usersPageReducer';


type SearchPropsType = {
  filter: FilterType;
  setFilter: SetFilterType;
  setCurrentPage: SetCurrentPageType;
}


const Search: React.FC<SearchPropsType> = ({ filter, setFilter, setCurrentPage }) => {

  const [searchValue, setSearchValue] = useState('');
  const [followersFilter, setFollowersFilter] = useState<boolean | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const newFilterParams = { term: searchValue, friend: String(followersFilter) };
  const newFilter: FilterType = { term: searchValue, friend: followersFilter };

  useEffect(() => {
    setSearchValue(filter.term);
    setFollowersFilter(filter.friend)
  }, []);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setSearchParams(newFilterParams);
    setCurrentPage(1);
    setFilter(newFilter);
  };

  const onClearSearchValue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setSearchValue('');
    setFollowersFilter(null);
    setSearchParams({});
    setFilter({ term: '', friend: null });
    setCurrentPage(1);
  }

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }
  

  const onChangeFollowersFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const filtredValue = e.target.value === 'true' ? true : e.target.value === 'false' ? false : null;
    setFollowersFilter(filtredValue)
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input value={searchValue} onChange={onChangeSearchValue} type='text' name='search' />
        <label htmlFor='followed'>
          <input id='followed' type='radio' value='true' onChange={onChangeFollowersFilter} checked={followersFilter === true} />
          followed
        </label>
        <label htmlFor='unfollowed'>
          <input id='unfollowed' type='radio' value='false' onChange={onChangeFollowersFilter} checked={followersFilter === false} />
          unfollowed
        </label>
        <label htmlFor='all'>
          <input id='all' type='radio' value='' onChange={onChangeFollowersFilter} checked={followersFilter === null} />
          all
        </label>
        <button type='submit'>Find</button>
        <button onClick={onClearSearchValue}>Clear</button>
      </form>
    </div>
  )
}

export default React.memo(Search);