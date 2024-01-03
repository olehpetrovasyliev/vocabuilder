import React, { FC, useState } from "react";
import Logo from "../ui/Logo/Logo";
import {
  selectIsLoggedIn,
  selectUser,
} from "../../helpers/redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser);
  return (
    <header>
      <div>
        <Logo />
        {user && (
          <>
            <nav>
              <NavLink to="/dictionary">Dictionary</NavLink>
              <NavLink to="/recommend">Recommend</NavLink>
              <NavLink to="/training">Training</NavLink>
            </nav>
            <div>
              <p>{user.name}</p>
              <svg>
                <use></use>
              </svg>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
