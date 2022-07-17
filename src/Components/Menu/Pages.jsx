import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Pages = () => {
  const menu = useSelector((state) => state.barOpen);
  const display = { display: "none" };
  return (
    <>
      <div id="menuBar" className={menu ? null : "open"}>
        <NavLink end={true} className="links" to="/Google_Keep_Clone/">
          <LightbulbOutlinedIcon />
          <p style={menu ? null : { display: "none" }}>Notes</p>
        </NavLink>
        <NavLink className="links" to="/Google_Keep_Clone/About">
          <InfoOutlinedIcon />
          <p style={menu ? null : display}>About</p>
        </NavLink>
      </div>
    </>
  );
};

export default Pages;
//
