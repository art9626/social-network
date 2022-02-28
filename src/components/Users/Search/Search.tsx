import { Field, Form, Formik, FormikProps } from 'formik';
import React, { MouseEvent } from 'react';
import { FilterType, SetFilterType } from '../../../redux/usersPageReducer';

type FormValues = {
  search: string;
  friend: boolean | null | string;
}

type SearchPropsType = {
  filter: FilterType;
  setFilter: SetFilterType;
}



export const Search: React.FC<SearchPropsType> = React.memo(({ setFilter, filter }) => {

  // const [searchParams, setSearchParams] = useSearchParams();

  const onClearSearchValue = (e: MouseEvent<HTMLButtonElement>, setFieldValue: any) => {
    e.preventDefault();
    
    setFieldValue('search', '');
    setFieldValue('friend', 'null');
    
    // setSearchParams({});
    setFilter({ term: '', friend: null }, 1);
  }


  return (
      <Formik<FormValues>
        initialValues={{
          search: filter.term,
          friend: String(filter.friend),
        }}
        onSubmit={(
          { search, friend },
          { setSubmitting }
        ) => {
          // if (typeof friend === 'string') {
          //   const newSearchParams = { term: search, friend: friend };
          //   setSearchParams(newSearchParams);
          // }
          
          const usersFilterValue = friend === 'true' ? true : friend === 'false' ? false : null;
          const newFilter: FilterType = { term: search, friend: usersFilterValue };

          setFilter(newFilter, 1);
          setSubmitting(false);
        }}
      >

        {
          (props: FormikProps<FormValues>) => {
            const { isSubmitting, setFieldValue } = props;

            return (
              <Form>
                <Field
                  type='text'
                  name='search'
                  autoComplete="off"
                />
                <div role='group' aria-labelledby='my-radio-group'>
                  <label>
                    <Field type='radio' name='friend' value='true' />
                    followed
                  </label>
                  <label>
                    <Field type='radio' name='friend' value='false' />
                    unfollowed
                  </label>
                  <label>
                    <Field type='radio' name='friend' value='null' />
                    all
                  </label>
                </div>
                <button type='submit' disabled={isSubmitting}>Find</button>
                <button onClick={(e) => onClearSearchValue(e, setFieldValue)}>Clear</button>
              </Form>
            )
          }
        }
      </Formik>
  );
});

