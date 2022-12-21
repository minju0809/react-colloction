import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const [isNavshowing, setIsNavShowing] = useState(false);
  const [toggle, setToggle] = useState(false);

  const NavShow = () => {
    setIsNavShowing((isNavshowing) => !isNavshowing);
  };

  const ModeChange = () => {
    setToggle((toggle) => !toggle);
    document.body.classList.toggle("dark_theme_variables");
    console.log(toggle);
  };

  return (
    <nav>
      <div className="container nav__container">
        <div className="nav">
          <MenuIcon className="nav__toggleBtn" onClick={() => NavShow()} />
          <div className="nav__title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React_Collection
          </div>
          <div className="modeChange__toggle" onClick={() => ModeChange()}>
            {toggle ? <DarkModeIcon /> : <LightModeIcon />}
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
