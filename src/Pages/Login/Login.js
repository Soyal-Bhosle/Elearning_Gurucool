import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Link,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";

import Navbar2 from "../../Components/Navbar/Navbar2";

const theme = createTheme();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Retrieve user data from local storage
    const storedUsers = localStorage.getItem("userCredentials");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    if (!email || !password) {
      alert("Please fill all the fields!");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email!");
    } else {
      // Check if the entered email and password match any user in the user data array
      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        // Store the logged-in user's data in local storage
        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

        // Redirect to homepage or any other authenticated page
        window.location.href = "/Homepage";
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar2 />
        <div
          style={{
            maxWidth: 400,
            padding: theme.spacing(4),
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Typography variant="h4">Login</Typography>
          <form onSubmit={handleLogin}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </form>
          <Typography variant="body1">
            Don't have an account? <Link href="/register">Register</Link>
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
