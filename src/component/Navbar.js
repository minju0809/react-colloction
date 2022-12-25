import * as React from "react";
import { useState } from "react";
import "../App.css";

import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Avatar from "@mui/material/Avatar";

const Navbar = ({ setPage }) => {
  const [isNavshowing, setIsNavShowing] = useState(false);
  const [toggle, setToggle] = useState(false);

  const ModeChange = () => {
    setToggle(!toggle);
    document.body.classList.toggle("dark_theme_variables");
    console.log(toggle);
  };

  const changePage = (pageNum) => {
    setPage(pageNum);
    setIsNavShowing(false);
  };

  return (
    <nav>
      <div className="container nav__container">
        <div className="nav">
          <MenuIcon className="nav__toggleBtn" onClick={() => setIsNavShowing(!isNavshowing)} />
          <div className="nav__title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React_Collection
          </div>
          <div className="modeChange__toggle" onClick={() => ModeChange()}>
            {toggle ? <DarkModeIcon /> : <LightModeIcon />}
          </div>

          <Avatar sx={{ bgcolor: "#673ab7" }}>K</Avatar>
        </div>
        <ul className={`nav__menus ${isNavshowing ? "show__nav" : "hide__nav"}`}>
          <li onClick={() => changePage(0)}>HOME</li>
          <li onClick={() => changePage(1)}>FindGym</li>
          <li onClick={() => changePage(2)}>PAGE2</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
