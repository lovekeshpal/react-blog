import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <input type="checkbox" id="check" />
      <label for="check" className="checkBtn">
        <i class="fas fa-bars"></i>
      </label>
      <label className="logo">Lovekesh's &nbsp; Blog</label>
      <ul>
        <li>
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
