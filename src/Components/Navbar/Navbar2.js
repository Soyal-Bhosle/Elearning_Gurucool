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

const Navbar2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Gurucool
          </Typography>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '16px' }}>
            Home
          </a>
          <a href="/about" style={{ textDecoration: 'none', color: 'inherit', marginRight: '16px' }}>
            About Us
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar2;
