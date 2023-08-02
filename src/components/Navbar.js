import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <CssBaseline>
      <AppBar
        sx={{
          bgcolor: "black",
          position: "sticky",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ textAlign: "center" }} variant="h4">
            User Authentication
          </Typography>
          {/*  */}
          <Button LinkComponent={Link} to="/login" variant="contained">
            Login
          </Button>
          <Button LinkComponent={Link} to="/signup" variant="contained">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

export default Navbar;
