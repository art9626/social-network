import { Field, Form, Formik, FormikErrors, FormikHelpers, FormikProps } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, setStatusThunk } from '../../../../redux/profilePageReducer';
import { getErrorMessages, getStatusEditMode, getUserStatus } from '../../../../redux/profileSelecrors';
type PropsType = {
  isOwner: boolean;
}

export const ProfileStatus: React.FC<PropsType> = ({ isOwner }) => {

  const errorMessages = useSelector(getErrorMessages);
  const userStatus = useSelector(getUserStatus);
  const statusEditMode = useSelector(getStatusEditMode);

  const dispatch = useDispatch();

  const setEditMode = (state: boolean, fieldName: string) => dispatch(actions.toggleEditMode(state, fieldName));

  const errorMessage = errorMessages.onSetStatusErrorMessage;

  const activateEditMode = () => {
    if (isOwner) {
      setEditMode(true, 'statusEditMode')
    }
  };


  return (
    <div>
      {
        errorMessage && <div>{errorMessage}</div>
      }
      {
        statusEditMode
          ? <ProfileStatusForm />
          : <span onDoubleClick={activateEditMode}>{userStatus || '---'}</span>
      }
    </div>
  )
}






type InitialValuesType = {
  userStatus: string;
}

const ProfileStatusForm: React.FC = () => {

  const userStatus = useSelector(getUserStatus);
  const dispatch = useDispatch();
  const setStatus = (text: string) => dispatch(setStatusThunk(text));

  const initialValues: InitialValuesType = { userStatus };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: InitialValuesType, { setSubmitting }: FormikHelpers<InitialValuesType>) => {
        setStatus(values.userStatus);
        setSubmitting(false);
      }}
      validate={(values: InitialValuesType) => {
        const errors: FormikErrors<InitialValuesType> = {};
        
        if (values.userStatus.length > 300) {
          errors.userStatus = 'Status max length 300 symbols';
        }

        return errors;
      }}
    >
      {
        (props: FormikProps<InitialValuesType>) => {
          const { errors, touched, isSubmitting } = props;

          return (
            <Form>
              <Field 
                name='userStatus'
                type='text'
                autoComplete='off'
              />
              <button type='submit' disabled={isSubmitting}>Save status</button>
              { errors.userStatus && touched.userStatus && <div>{errors.userStatus}</div> }
            </Form>
          );
        }
      }
    </Formik>
  );
}