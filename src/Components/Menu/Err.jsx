import React from "react";
import { NavLink } from "react-router-dom";

const Err = () => {
  return (
    <>
      <div id="error">
        <h1>404</h1>
        <h2>OOPS ! PAGE NOT FOUND</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <NavLink className="errBtn" to="/Google_Keep_Clone">
          Back To Home
        </NavLink>
      </div>
    </>
  );
};

export default Err;
