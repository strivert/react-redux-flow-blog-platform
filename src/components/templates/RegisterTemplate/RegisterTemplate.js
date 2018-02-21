// @flow
import React, { Component } from 'react';
import BackgroundColor from 'components/common/BackgroundColor';
import Responsive from 'components/common/Responsive';

import './RegisterTemplate.scss';

type Props = {};

class RegisterTemplate extends Component<Props> {
  render() {
    return (
      <div className="register-template">
        <BackgroundColor color="#495057" />
        <Responsive className="mock-header">
          <div className="brand">
            Prageer
          </div>
          <div className="light">
            <span>/</span>Member Login
          </div>
        </Responsive>
        <section className="rest">
          <div className="register-card">
            hello
          </div>
        </section>
      </div>
    );
  }
}

export default RegisterTemplate;
