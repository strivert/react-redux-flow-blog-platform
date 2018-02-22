// @flow
import React from 'react';
import LabelInput from 'components/register/LabelInput';
import ArrowIcon from 'react-icons/lib/md/arrow-forward';

import './RegisterForm.scss';

type Props = {
  onChange(e: SyntheticInputEvent<HTMLInputElement>): void,
  onRegister(): Promise<*>,
  displayName: string,
  email: string,
  username: string,
  shortBio: string
};

const RegisterForm = ({
  onChange, onRegister,
  displayName, email, username, shortBio,
}: Props) => {
  return (
    <div className="register-form">
      <div className="form-head">
        <h2>Register Main Member Info</h2>
      </div>
      <div className="form-contents">
        <LabelInput value={displayName} name="displayName" required label="Name" placeholder="Please input your name" onChange={onChange} />
        <LabelInput value={email} name="email" required label="Email" disabled />
        <LabelInput value={username} name="username" required label="ID" placeholder="Please input your ID" onChange={onChange} />
        <LabelInput value={shortBio} name="shortBio" label="Breif Introduction In a Line" placeholder="Input intro in a line" onChange={onChange} />
        <div className="agreement">
          Click Next to agree <span>Serivce of Terms</span> and <span>Policy of person</span>.
        </div>
        <div className="button-wrapper">
          <div className="icon-button" onClick={onRegister}>
            <span>Next</span>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
