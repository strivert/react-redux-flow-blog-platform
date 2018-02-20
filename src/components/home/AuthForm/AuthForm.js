// @flow
import React from 'react';
import SocialLoginButton from 'components/home/SocialLoginButton';

import './AuthForm.scss';

type Props = {
  onChange(e: Event): void,
  email: string,
};

const AuthForm = ({ onChange, email }: Props) => {
  return (
    <div className="auth-form">
      <div className="input-with-button">
        <input placeholder="Please input type email" value={email} onChange={onChange} />
        <div className="button">Start</div>
      </div>
      <div className="separator">
        <div className="or">OR</div>
      </div>
      <div className="social-buttons">
        <SocialLoginButton type="github" />
        <SocialLoginButton type="google" />
        <SocialLoginButton type="facebook" />
      </div>
    </div>
  );
};

export default AuthForm;
