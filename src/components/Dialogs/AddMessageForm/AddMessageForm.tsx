import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';
import { AddMessageFormDataType } from '../Dialogs';

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = ({ handleSubmit }) => {
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

export default reduxForm<AddMessageFormDataType>({ form: 'dialogsAddMessageForm' })(AddMessageForm);