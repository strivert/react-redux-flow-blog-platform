// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import BackgroundColor from 'components/common/BackgroundColor';
import Responsive from 'components/common/Responsive';

import './RegisterTemplate.scss';

type Props = {
  form: Node,
};

class RegisterTemplate extends Component<Props> {
  render() {
    const { form } = this.props;
    return (
      <div className="register-template">
        <BackgroundColor color="#495057" />
        <Responsive className="mock-header">
          <Link to="/" className="brand">
            Prageer
          </Link>
          <div className="light">
            <span>/</span>Member Register
          </div>
        </Responsive>
        <section className="rest">
          <div className="register-card">
            { form }
          </div>
        </section>
      </div>
    );
  }
}

export default RegisterTemplate;
