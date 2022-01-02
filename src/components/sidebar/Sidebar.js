import "./sidebar.css";

import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">
            <span className="sideBarTitleText">ABOUT ME</span>
          </span>
          <img
            src="https://avatars.githubusercontent.com/u/33663922?v=4"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
            sed egestas egestas fringilla phasellus faucibus scelerisque
            eleifend. Pretium nibh ipsum consequat nisl vel. Pretium aenean
            pharetra magna ac.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">
            <span className="sideBarTitleText">FOLLOW &nbsp; ME</span>
          </span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square "></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </div>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">
            <span className="sideBarTitleText">BLOG &nbsp; CATEGORIES</span>
          </span>
          <div className="sidebarCategory">
            <div className="categoryNames">Travel</div>
            <div className="categoryNames">Tech</div>
            <div className="categoryNames">Fitness</div>
            <div className="categoryNames">Life</div>
          </div>
        </div>
      </div>
    </div>
  );
}
