import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { LoginFormDataType } from '../../../redux/authReducer';
import { Input } from '../../common/FormControls/FormControls';

export type OwnPropsType = {
  captchaUrl: string | null;
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, OwnPropsType> & OwnPropsType> = ({ handleSubmit, error, captchaUrl }) => {
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

      {
        captchaUrl &&
        <div>
          <img src={captchaUrl} alt="" />
          <Field
            name='captcha'
            component={Input}
            type='text'
            label='Enter the characters from the picture'
          />
        </div>
      }

      {
        error && <div>{error}</div>
      }

      <button>Login</button>
    </form>
  )
}



export default reduxForm<LoginFormDataType, OwnPropsType>({ form: 'login' })(LoginForm);