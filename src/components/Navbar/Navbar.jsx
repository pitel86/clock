import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header>
      <nav className="c-header">
        <NavLink className="c-header__link" to="" activeclassname={"active"}>
          Clock
        </NavLink>
        <NavLink
          className="c-header__link"
          to="countDown"
          activeclassname={"active"}
        >
          CountDown
        </NavLink>
        <NavLink
          className="c-header__link"
          to="crono"
          activeclassname={"active"}
        >
          Crono
        </NavLink>
      </nav>
    </header>
  );
};
