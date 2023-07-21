import React from "react";
import burger from "../../assets/notfound.png";

const NotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found-child">
        <h4>404 Page Not Found</h4>
        <p>Oops! Looks like you've reached a page that doesn't exist.</p>
        <img src={burger} alt="Hamburger" />
        <p>But don't worry, we have plenty of delicious burgers waiting for you at <a href="/login">Burger Shop!</a></p>
      </div>
    </div>
  );
};

export default NotFound;
