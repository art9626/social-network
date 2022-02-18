import { Field, Form, Formik, FormikProps } from 'formik';
import React, { MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterType, SetCurrentPageType, SetFilterType } from '../../../redux/usersPageReducer';

type FormValues = {
  search: string;
  friend: boolean | null | string;
}

type SearchPropsType = {
  filter: FilterType;
  setFilter: SetFilterType;
  setCurrentPage: SetCurrentPageType;
}



const SearchWithFormik: React.FC<SearchPropsType> = ({ setFilter, setCurrentPage, filter }) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const onClearSearchValue = (e: MouseEvent<HTMLButtonElement>, setFieldValue: any) => {
    e.preventDefault();
    
    setFieldValue('search', '');
    setFieldValue('friend', 'null');
    
    setSearchParams({});
    setFilter({ term: '', friend: null });
    setCurrentPage(1);
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
          if (typeof friend === 'string') {
            const newSearchParams = { term: search, friend: friend };
            setSearchParams(newSearchParams);
          }
          
          const usersFilterValue = friend === 'true' ? true : friend === 'false' ? false : null;
          const newFilter: FilterType = { term: search, friend: usersFilterValue };
          setFilter(newFilter);

          setCurrentPage(1);

          setSubmitting(false)
        }}
        validate={({ search }) => {
          let errors: any = {};

          if (search.length > 3) {
            errors.search = 'maxmamxa'
          }

          return errors;
        }}
      >

        {
          (props: FormikProps<FormValues>) => {
            const { isSubmitting, setFieldValue, errors, touched } = props;

            return (
              <Form>
                <Field
                  type='text'
                  name='search'
                  autoComplete="off"
                />
                {
                  errors.search && touched.search && <div>{errors.search}</div>
                }
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
};


export default React.memo(SearchWithFormik);