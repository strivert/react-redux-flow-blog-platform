// @flow
import React from 'react';
import withClickOutside from 'react-onclickoutside';
import { Link } from 'react-router-dom';
import UserMenuItem from 'components/base/UserMenuItem';
import './UserMenu.scss';

const UserMenu = ({ onClick, onLogout }) => {
  return (
    <div className="user-menu-wrapper">
      <div className="user-menu-positioner">
        <div className="user-menu" onClick={onClick}>
          <div className="me">
            <div className="username">
              @prag
            </div>
          </div>
          <div className="menu-items">
            <UserMenuItem>
              New Article
            </UserMenuItem>
            <UserMenuItem>
              Temporary article
            </UserMenuItem>
            <div className="separator" />
            <UserMenuItem>
              Setting
            </UserMenuItem>
            <UserMenuItem onClick={onLogout}>
              Logout
            </UserMenuItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withClickOutside(UserMenu, {
  handleClickOutside(instance) {
    return instance.props.onClickOutside;
  },
});