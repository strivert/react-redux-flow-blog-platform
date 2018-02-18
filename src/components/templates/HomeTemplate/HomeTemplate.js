import React from 'react';
import Responsive from 'components/common/Responsive';
import './HomeTemplate.scss';

const HomeTemplate = () => {
  return (
    <div className="home-template">
      <Responsive className="block">
        <div className="left-text">
          <div>
            <h1>Where can our developer<br />write a article</h1>
            <div className="description">
              <p>Ah... from here</p>
            </div>
          </div>
        </div>
        <div className="right-form">
          <div className="black-box">
            My name is ...
          </div>
          <div className="register-button">
            Now get started
          </div>
        </div>
      </Responsive>
    </div>
  );
};

export default HomeTemplate;
