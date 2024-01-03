import React, { FC, useState } from "react";
import Logo from "../ui/Logo/Logo";
import {
  selectIsLoggedIn,
  selectUser,
} from "../../helpers/redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  const user = useSelector(selectUser);
  return (
    <header>
      <div>
        <Logo />
        {user && <NavBar />}
      </div>
    </header>
  );
};

export default Header;
