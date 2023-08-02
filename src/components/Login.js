import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handlesubmit = () => {
    alert("email is :" + email);
    alert("password is :" + password);
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <CssBaseline>
      <Box>
        <Typography sx={{ margin: 3 }} variant="h4">
          Login
        </Typography>

        <form onSubmit={onLogin}>
          <TextField
            id="input-with-icon-textfield"
            label="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <br />
          <br />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
        <Box sx={{ margin: 3 }}>
          <Typography sx={{ margin: 3 }} variant="p">
            Don't have an account?
          </Typography>{" "}
          <br />
          <Button
            sx={{ margin: 3 }}
            component={Link}
            to="/signup"
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </CssBaseline>
  );
};

export default Login;
