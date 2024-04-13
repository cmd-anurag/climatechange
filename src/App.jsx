import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ClimateChange from "./components/ClimateChange";
import Footprint from "./components/Footprint";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/cc" element={<ClimateChange />}></Route>
      <Route exact path="/calculateCarbonFootprint" element={<Footprint />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
