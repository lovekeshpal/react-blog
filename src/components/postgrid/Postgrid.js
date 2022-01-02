import "./postgrid.css";

import React from "react";

export default function Postgrid() {
  return (
    <div className="postgridContainer">
      <div className="postgridTitle">
        <p className="titleText">&nbsp; TRENDING POSTS</p>
      </div>
      <div className="postgridBoxContainer">
        <div className="postgridBox">
          <img src="https://images.pexels.com/photos/4997907/pexels-photo-4997907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        </div>
        <div className="postgridBox">
          <img src="https://images.pexels.com/photos/4906319/pexels-photo-4906319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        </div>
        <div className="postgridBox">
          <img src="https://images.pexels.com/photos/1600757/pexels-photo-1600757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        </div>
        <div className="postgridBox">
          <img src="https://images.pexels.com/photos/5054166/pexels-photo-5054166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        </div>
      </div>
    </div>
  );
}
