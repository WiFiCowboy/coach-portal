import React from 'react'
// import { Link } from "react-router-dom";
import logo from '../assets/attLogo.png'

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <img src={logo} className="logo"></img>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;