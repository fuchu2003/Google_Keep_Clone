import React from "react";
import Image from "../../Images/IMG_5921.JPG";
import Fab from "@mui/material/Fab";

const About = () => {
  return (
    <>
      <div id="about">
        <img id="copy_img" src={Image} alt="Not Found" />
        <h1>Sayandeep Karak</h1>
        <h2>sayandeep18.webdev@gmail.com</h2>
        <p>Tried to clone google keep , just a template, storage not available</p>
        <Fab variant="extended">
          <a href="https://github.com/fuchu2003" target="_blank" rel="noreferrer">
            Profile
          </a>
        </Fab>
      </div>
    </>
  );
};

export default About;
