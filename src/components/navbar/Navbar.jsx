import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
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
        <span class="material-symbols-outlined">shopping_cart</span>
      </div>
    </div>
  );
}
