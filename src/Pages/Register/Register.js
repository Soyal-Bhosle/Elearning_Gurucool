import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Link,
  Button,
  makeStyles,
} from "@material-ui/core";
import Navbar2 from "../../Components/Navbar/Navbar2";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(4),
  },
  form: {
    maxWidth: 400,
    width: "100%",
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    textAlign: "center",
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
  },
}));

const Register = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    if (!name || !email || !password || !phone || !position) {
      alert("Please fill all the fields!");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email!");
    } else if (password.length < 11) {
      alert("Password should be at least 11 characters long!");
    } else if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid phone number!");
    } else {
      // Retrieve the existing user data from localStorage
      const storedUsers = localStorage.getItem("userCredentials");

      // Parse the existing user data or initialize an empty array if it doesn't exist
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Check if the email already exists in the user data
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        alert("This email is already registered. Please use a different email!");
        return;
      }

      // Create a new user object
      const newUser = {
        name,
        email,
        password,
      };

      // Add the new user to the user data array
      users.push(newUser);

      // Store the updated user data in localStorage
      localStorage.setItem("userCredentials", JSON.stringify(users));

      // Redirect to login page
      window.location.href = "/login";
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className={classes.root}>
        <Typography variant="h4">Register</Typography>
        <form className={classes.form} onSubmit={handleRegister}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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
          <TextField
            id="phone"
            label="Phone Number"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <FormControl variant="outlined" fullWidth required>
            <InputLabel id="position-label">Position</InputLabel>
            <Select
              labelId="position-label"
              id="position"
              value={position}
              onChange={(event) => setPosition(event.target.value)}
              label="Position"
            >
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Teacher">Teacher</MenuItem>
              <MenuItem value="Employee">Employee</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
        <Typography variant="body1">
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </div>
    </div>
  );
};

export default Register;
