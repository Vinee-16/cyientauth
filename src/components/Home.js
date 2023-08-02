import { Box, Button, CssBaseline, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // If user is not logged in, redirect to login page
        navigate("/login");
      }
    });

    return () => {
      // Unsubscribe from the auth state listener when component unmounts
      unsubscribe();
    };
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
  };

  return (
    <CssBaseline>
      <Box>
        <Typography variant="h2">Welcome Home</Typography>

        <Button component={Link} to="/login" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </CssBaseline>
  );
};

export default Home;
