import React from "react";
import { Typography, Drawer, Link, Box, Divider } from "@mui/material";
import { drawerWidth, navItems } from "../../utils/constants";
import "./drawer.modules.scss";

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
        className="drawer"
      >
        <Box onClick={props.handleDrawerToggle} className="drawerNavigationBox">
          <Typography variant="h6" className="drawerName">
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
