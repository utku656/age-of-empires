import * as React from "react";
import { Box } from "@mui/material";
import AgeOfImg from "../../assets/age-of-emp.jpg";

export default function Homepage() {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <img alt="Age Of Empires" src={AgeOfImg} style={{ width: "100%" }} />
    </Box>
  );
}
