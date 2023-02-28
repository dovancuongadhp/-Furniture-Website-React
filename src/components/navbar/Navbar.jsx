import React from "react";
import { NavLink } from "react-router-dom";
import { CartIcon, SearchIcon,EcoIcon } from "../../assets/icons";
import "../../assets/style/navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <div className="brand">Unicoin</div>
        <div className="list__links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/decor"}>Decor</NavLink>
          <NavLink to={"/plant"}>Plant</NavLink>
          <NavLink to={"/light"}>Light</NavLink>
          <NavLink to={"/chair"}>Chair</NavLink>
        </div>
        <div className="list__icons">
          <div className="social">
            <EcoIcon />
            <SearchIcon />
          </div>
          <div className="cart__icon">
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
