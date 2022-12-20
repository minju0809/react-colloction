import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const [isNavshowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <div className="nav">
          <MenuIcon
            onClick={() => {
              setIsNavShowing((prev) => !prev);
            }}
          />
          <div className="nav__title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React_Collection
          </div>
              <Avatar sx={{ bgcolor: "#673ab7" }}>K</Avatar>
        </div>
        <ul className={`nav__menus ${isNavshowing ? "show__nav" : "hide__nav"}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-nav" : "")} onClick={() => setIsNavShowing((prev) => !prev)}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/page1" className={({ isActive }) => (isActive ? "active-nav" : "")} onClick={() => setIsNavShowing((prev) => !prev)}>
              PAGE1
            </NavLink>
          </li>
          <li>
            <NavLink to="/page2" path="/page2" className={({ isActive }) => (isActive ? "active-nav" : "")} onClick={() => setIsNavShowing((prev) => !prev)}>
              PAGE2
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
