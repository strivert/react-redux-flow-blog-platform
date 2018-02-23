// @flow
import React, { KeyboardEvent } from 'react';
import SocialLoginButton from 'components/landing/SocialLoginButton';
import CheckIcon from 'react-icons/lib/md/check';
import Spinner from 'components/common/Spinner';
import cx from 'classnames';

import './AuthForm.scss';

type Props = {
  onChange(e: Event): void,
  onSendVerification(): Promise<*>,
  onEnterKeyPress(e: KeyboardEvent): void,
  email: string,
  sentEmail: boolean,
  sending: boolean,
  isUser: boolean,
};

const AuthForm = ({
  onChange,
  onSendVerification,
  onEnterKeyPress,
  email,
  sentEmail,
  sending,
  isUser,
}: Props) => {
  return (
    <div className="auth-form">
      {
        sentEmail
          ? (
            <div className="sent-email">
              <CheckIcon />
              <div className="text">
                {isUser ? 'Login' : 'Register as a Member'} An Email was sent to you.<br />
                Please click your link {isUser ? 'Login' : 'Register as a Member'} to continue.
              </div>
            </div>
          ) : (
            <div className={cx('input-with-button', { sending })}>
              <input
                placeholder="Input your email"
                value={email}
                onChange={onChange}
                disabled={sending}
                onKeyPress={onEnterKeyPress}
              />
              <div className="button" onClick={onSendVerification}>
                {sending ? <Spinner size="3rem" /> : 'Start'}
              </div>
            </div>
        )
      }
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
