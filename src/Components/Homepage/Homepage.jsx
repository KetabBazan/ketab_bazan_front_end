import React from "react";
import Navbar from "../Navbar/Nav";
import Navbar2 from "../Navbar/Nav2";
import Header from "../Header/Header";
import Showbook from "../Shownewbook/showbook";
import Workinfo from "../WorkInfo/workinfo";
import ChangeNav from "../Navbar/changeNav";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ShownewArcrousel from "../shownewarticle-crousel/shownewarcrousel";
import SimpleSlider from "../emtehani/emtehani";
import Login from "../Login/Login";

const Homepage = () => {
  return (
    <div>
      <ChangeNav />
      <Header />
      <Workinfo />
      <SimpleSlider />
      <ShownewArcrousel />
    </div>
  );
};

export default Homepage;
