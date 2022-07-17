import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Tooltip from "@mui/material/Tooltip";

const SearchBar = () => {
  const [sVal, changesVal] = useState("");
  const setSer = (e) => changesVal(e.target.value);
  const searchVal = () => {
    let allSaveNote = document.getElementsByClassName("notes-boxes");
    Array.from(allSaveNote).forEach(function (element) {
      let inTitle = element.getElementsByTagName("h3")[0].innerText;
      let inText = element.getElementsByTagName("p")[0].innerText;
      if (inTitle.includes(sVal) || inText.includes(sVal)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  };
  const clearVal = () => {
    changesVal("");
    let allSaveNote = document.getElementsByClassName("notes-boxes");
    Array.from(allSaveNote).forEach((e) => (e.style.display = "block"));
  };
  const [searchE, shadow] = useState(false);
  return (
    <>
      <div
        id="searchBar"
        style={
          searchE
            ? {
                filter: "drop-shadow(0px 2px 2px #d4d4d4)",
                backgroundColor: "white",
              }
            : { filter: "drop-shadow(0px 0px 0px var(--shadow))" }
        }
      >
        <Tooltip title="Search">
          <Button variant="text" id="searchIcon">
            <SearchIcon />
          </Button>
        </Tooltip>
        <input
          id="searchInput"
          type="text"
          placeholder="Search"
          value={sVal}
          onClick={() => shadow(true)}
          onBlur={() => shadow(false)}
          onChange={setSer}
          onInput={searchVal}
        />
        <Tooltip title="Clear">
          <Button variant="text" id="searchIcon" onClick={clearVal}>
            <ClearIcon />
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default SearchBar;
