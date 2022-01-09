import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const AddMessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='newMessage'
        component={Textarea}
        placeholder='Enter your message'
        validate={[required]}
      />
      <button>Send</button>
    </form>
  )
};

export default reduxForm({ form: 'dialogsAddMessageForm' })(AddMessageForm);