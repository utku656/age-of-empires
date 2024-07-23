import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.modules.scss";
import { navItems } from "../../utils/constants";
import MyDrawer from "../drawer/drawer";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar component="nav" position="relative">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="headerWebIconButton"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className="headerTypography">
            Age of Empires
          </Typography>
          <Box className="headerLinkBox">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={`/${item.link}`}
                className="headerLink"
              >
                {item.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar component="nav">
        <MyDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </AppBar>
    </>
  );
};

export default Header;
