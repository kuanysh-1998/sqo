import React from "react";
import "./navmenu.scss";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="menu">
      <Link to="/">ГЛАВНАЯ</Link>
      <Link to="https://geo.e-sqo.kz/layer-themes" target='_blank'>ОТКРЫТАЯ КАРТА</Link>
      <Link to="/government">ГОСУДАРСТВЕННЫЕ УСЛУГИ</Link>
    </div>
  );
};

export default NavMenu;
