import "./hero.css";

import React from "react";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroHead">
        <div className="featureOne">
          <img src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        </div>
        <div className="featureOne  featureAddOne">
          <div className="featureTwo">
            <img src="https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          </div>
          <div className="featureTwo">
            <img src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          </div>
        </div>
        <div className="featureOne  featureAddTwo">
          <div className="featureTwo">
            <img src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          </div>
          <div className="featureTwo">
            <img src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          </div>
        </div>
        <div className="featureOne">
          <img src="https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        </div>
      </div>
    </div>
  );
}
