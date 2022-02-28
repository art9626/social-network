import React, { MouseEvent } from 'react';
import { ContactsType, UserProfileType } from '../../../../redux/profilePageReducer';
import { ErrorMessage, Field, FieldArray, Form, Formik, FormikErrors, FormikHelpers, FormikProps } from 'formik';



type PropsType = {
  initialValues: UserProfileType;
  deactiveEditMode: (e: MouseEvent<HTMLButtonElement>) => void;
  setProfileData: (data: UserProfileType) => void;
}




export const ProfileDataForm: React.FC<PropsType> = ({ initialValues, deactiveEditMode, setProfileData }) => {

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: UserProfileType, { setSubmitting }: FormikHelpers<UserProfileType>) => {
        setProfileData(values);
        setSubmitting(false);
      }}
      validate={(values: UserProfileType) => {
        const errors: FormikErrors<UserProfileType> = {};

        if (!values.fullName) {
          errors.fullName = 'The FullName field is required';
        }

        if (!values.aboutMe) {
          errors.aboutMe = 'The AboutMe field is required';
        }

        const regExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

        Object.keys(values.contacts).forEach((item) => {
          if (values.contacts[item as keyof ContactsType] && !regExp.test(values.contacts[item as keyof ContactsType])) {
            if (!errors.contacts) {
              errors.contacts = {};
            }
            errors.contacts[item as keyof ContactsType] = 'Invalid URL address';
          }
        })
        return errors;
      }}
    >
      {
        (props: FormikProps<UserProfileType>) => {

          const { values, isSubmitting, errors, touched } = props;

          return (
            <Form>
              <label>
                Full Name
                <Field
                  name='fullName'
                  type='text'
                />
              </label>
              {errors.fullName && touched.fullName && <div>{errors.fullName}</div>}
              <label>
                About me
                <Field
                  name='aboutMe'
                  type='text'
                />
              </label>
              {errors.aboutMe && touched.aboutMe && <div>{errors.aboutMe}</div>}
              <label>
                Looking for a job
                <Field
                  name='lookingForAJob'
                  type='checkbox'
                />
              </label>
              <label>
                My skills
                <Field
                  name='lookingForAJobDescription'
                  type='text'
                />
              </label>
              <ul>
                <h3>Contacts</h3>
                <FieldArray name='contacts'>
                  {
                    () => {
                      return (
                        <>
                          {
                            Object.keys(values.contacts).map((item, index) => {
                              return (
                                <li key={index}>
                                  <span>{item}: </span>
                                  <Field
                                    name={`contacts.${item}`}
                                    type='text'
                                    autoComplete='off'
                                  />
                                  <ErrorMessage
                                    name={`contacts.${item}`}
                                    component='div'
                                    className='field-error'
                                  />
                                </li>
                              );
                            })
                          }
                        </>
                      );
                    }
                  }
                </FieldArray>
              </ul>

              <button type='submit' disabled={isSubmitting}>Done</button>
              <button onClick={deactiveEditMode}>Close</button>

            </Form>
          );
        }
      }
    </Formik>
  );
}