import React from "react";
import { Typography, Drawer, Link, Box, Divider } from "@mui/material";
import { drawerWidth, navItems } from "../../utils/constants";

const MyDrawer = (props) => {
  return (
    <>
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box
          onClick={props.handleDrawerToggle}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h6" sx={{ my: 2 }}>
            Age of Empires
          </Typography>
          <Divider />
          {navItems.map((item) => (
            <Link key={item.name} href={`/${item.link}`}>
              {item.name}
            </Link>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default MyDrawer;
