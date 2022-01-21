import React from 'react';
import { Field } from 'redux-form';
import { Textarea, Input } from '../../../common/FormControls/FormControls';
import { reduxForm } from 'redux-form';
import { required } from '../../../../utils/validators/validators';


const ProfileDataForm = ({ handleSubmit, deactiveEditMode, userProfile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {
        error && <div>{error}</div>
      }
      Full Name
      <label>
        <Field
          name='fullName'
          component={Input}
          type='text'
          validate={[required]}
        />
      </label>
      <label>
        About me
        <Field
          name='aboutMe'
          component={Textarea}
          type='text'
          validate={[required]}
        />
      </label>
      <label>
        Looking for a job
        <Field
          name='lookingForAJob'
          component={Input}
          type='checkbox'
        />
      </label>
      <label>
        My skills
        <Field
          name='lookingForAJobDescription'
          component={Textarea}
          type='text'
          validate={[required]}
        />
      </label>
      <ul>
        <label>Contacts</label>
        {Object.keys(userProfile.contacts)
          .map(item => {
            return (
              <li key={item}>
                <label>
                  {item}
                  <Field
                    name={`contacts.${item}`}
                    component={Input}
                    type='text'
                  />
                </label>
              </li>
            );
          })}
      </ul>
      <button>Done</button>
      <button onClick={deactiveEditMode}>Close</button>
    </form>
  );
}

export default reduxForm({ form: 'profileDataForm' })(ProfileDataForm);