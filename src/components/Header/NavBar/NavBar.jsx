import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "../../../helpers/redux/auth/authSelectors";

const NavBar = () => {
  const user = useSelector(selectUser);
  return (
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
  );
};

export default NavBar;
