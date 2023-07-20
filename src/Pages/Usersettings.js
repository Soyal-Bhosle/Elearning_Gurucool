// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
// } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: theme.spacing(8),
//   },
//   form: {
//     width: '100%',
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const UserSettings = () => {
//   const classes = useStyles();
//   const [user, setUser] = useState(null);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     } else {
//       // Redirect to login page if user is not logged in
//       window.location.href = '/login';
//     }
//   }, []);

//   useEffect(() => {
//     if (user) {
//       setUsername(user.username);
//       setEmail(user.email);
//     }
//   }, [user]);

//   const handleUpdateProfile = (event) => {
//     event.preventDefault();
//     // Update the user object with new values
//     const updatedUser = { ...user, username, email };
//     // Store the updated user object in local storage
//     localStorage.setItem('user', JSON.stringify(updatedUser));
//     // Update the state with the new user object
//     setUser(updatedUser);
//     alert('Profile updated successfully!');
//   };

//   return (
//     <Container maxWidth="xs" className={classes.container}>
//       {user ? (
//         <>
//           <Typography variant="h4" gutterBottom>
//             User Settings
//           </Typography>
//           <form className={classes.form} onSubmit={handleUpdateProfile}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               autoComplete="username"
//               value={username}
//               onChange={(event) => setUsername(event.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Update Profile
//             </Button>
//           </form>
//         </>
//       ) : (
//         <Typography variant="h6">
//           User not found. Please log in again.
//         </Typography>
//       )}
//     </Container>
//   );
// };

// export default UserSettings;
