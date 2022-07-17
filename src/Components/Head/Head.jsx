import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "../../Images/keep.png";
import SearchBar from "./Search";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { list, mode, bar } from "../../action";

const Head = (props) => {
  const cardView = useSelector((state) => state.listView);
  const theme = useSelector((state) => state.lightDark);
  const dispatch = useDispatch();
  if (!theme) {
    document.body.className = "dark";
  } else {
    document.body.className = "light";
  }
  return (
    <>
      <div id="header">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            style={{
              color: "var(--logo)",
            }}
            onClick={() => dispatch(bar())}
          >
            <MenuIcon />
          </IconButton>
          <div id="logo_img">
            <img src={Image} id="logo" alt="Not Found"/>
            <h3 id="logoText">Keep</h3>
          </div>
          <SearchBar />
          <Tooltip title={!cardView ? "Grid" : "List"}>
            <IconButton
              className="view"
              size="large"
              color="inherit"
              style={{
                color: "var(--logo)",
              }}
              onClick={() => dispatch(list())}
            >
              {cardView ? <HorizontalSplitIcon /> : <ViewComfyIcon />}
            </IconButton>
          </Tooltip>
          <IconButton
            size="large"
            color="inherit"
            style={{
              color: "var(--logo)",
            }}
            onClick={() => dispatch(mode())}
          >
            {theme ? (
              <Tooltip title="Dark">
                <ModeNightIcon />
              </Tooltip>
            ) : (
              <Tooltip title="Light">
                <LightModeIcon />
              </Tooltip>
            )}
          </IconButton>
        </Toolbar>
      </div>
    </>
  );
};

export default Head;
