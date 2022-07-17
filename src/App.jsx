import React from "react";
import { Route, Routes } from "react-router-dom";
import Head from "./Components/Head/Head";
import Pages from "./Components/Menu/Pages";
import BodyArea from "./Components/Body/BodyArea";
import About from "./Components/Body/About";
import Err from "./Components/Menu/Err";

const App = () => {
  return (
    <>
      <Head />
      <div id="main-body">
        <Pages />
        <Routes>
          <Route end path="/Google_Keep_Clone" element={<BodyArea />}></Route>
          <Route end path="/Google_Keep_Clone/About" element={<About />} />
          <Route path="*" element={<Err />} />
        </Routes>
      </div>
      <footer>
        <p>Copyright &copy; 2022 Sayandeep Karak. All rights reserved</p>
      </footer>
    </>
  );
};

export default App;
