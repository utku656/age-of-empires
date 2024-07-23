import * as React from "react";
import { Box } from "@mui/material";
import AgeOfImg from "../../assets/age-of-emp.jpg";
import "./homepage.modules.scss";
export default function Homepage() {
  return (
    <Box component="main" className="mainHomepageBox">
      <img alt="Age Of Empires" src={AgeOfImg} className="ageOfImage" />
    </Box>
  );
}
