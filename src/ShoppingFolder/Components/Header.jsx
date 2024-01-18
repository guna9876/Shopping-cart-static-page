import React from "react";

const Banner = () => {
  return (
    <div className="headersection">
      <div className="left">
        <div className="title">Shopping Mall</div>
      </div>
      <div className="center">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="right">
        <div className="signin">
            Signin/Signup
        </div>
        <div className="cart">
            Cart
        </div>
      </div>
    </div>
  );
};

export default Banner;
