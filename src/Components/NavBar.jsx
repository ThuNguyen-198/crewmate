import React from "react";
import "./NavBar.css";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div className="main-nav">
      <Link className="home" to="/">
        Home
      </Link>

      <div className="nav-options">
        <Link className="nav-option option-create" to="/create-crew-mate">
          Create a Crewmate
        </Link>
        <Link className="nav-option option-gallery" to="/crewmates-gallery">
          Crewmate Gallery
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
