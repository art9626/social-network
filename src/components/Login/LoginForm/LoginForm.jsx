import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormControls/FormControls';


const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      
        <Field
          name='email'
          component={Input}
          type='text'
          label='Email'
        />
      
      
        <Field
          name='password'
          component={Input}
          type='password'
          label='Password'
        />
      
      
        <Field
          name='rememberMe'
          component={Input}
          type='checkbox'
          label='Remember me'
        />
      
      <button>Login</button>
    </form>
  )
}



export default reduxForm({ form: 'login' })(LoginForm);