import React from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = ({ onNavigatorChange }: any) => {
  const onNavigatorClick = () => {
    console.log("Open")
    onNavigatorChange();
  };
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={onNavigatorClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">My Application</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
