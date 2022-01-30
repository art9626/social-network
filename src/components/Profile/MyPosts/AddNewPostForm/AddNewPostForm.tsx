import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLength300, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormControls/FormControls';
import { NewPostMessageType } from '../MyPosts';

const AddNewPostForm: React.FC<InjectedFormProps<NewPostMessageType>> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='newPost'
        component={Textarea}
        placeholder='Enter your post'
        validate={[required, maxLength300]}
      />
      <button>Add</button>
    </form>
  );
}

export default reduxForm<NewPostMessageType>({ form: 'profileAddNewPostForm' })(AddNewPostForm);