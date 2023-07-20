import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#800000', // Maroon color
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const handleLogout = () => {
    // Redirect to the default home page
    window.location.href = '/Homepage';
    
    // You can remove the following line if you want to keep the user data in local storage after logout
    localStorage.removeItem('loggedInUser');
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Gurucool
          </Typography>
          <a href="/Homepage" style={{ textDecoration: 'none', color: 'inherit', marginRight: '16px' }}>
            Home
          </a>
          <a href="/aboutus" style={{ textDecoration: 'none', color: 'inherit', marginRight: '16px' }}>
            About Us
          </a>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLogout}>
            Logout
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
