import React from 'react';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Confetti from 'react-confetti';
import Navbar from '../../Components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
  },
  text: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  maroon: {
    background: '-webkit-linear-gradient(#800000, #FFC0CB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  red: {
    color: '#FF0000',
  },
  purple: {
    background: '-webkit-linear-gradient(#800080, #FF69B4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  darkblue: {
    color: '#00008B',
  },
  link: {
    color: '#800000',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Congratulation = () => {
  const classes = useStyles();

  return (
   <div >
    <Navbar />
    <div className={classes.root}>
      <Confetti />
      <h1 className={`${classes.text} ${classes.maroon}`}>Congratulations!</h1>
      <h1 className={`${classes.text} ${classes.maroon}`}>You have successfully completed the course.</h1>
      <h3 className={`${classes.text} ${classes.red} ${classes.purple}`}>We wish you a better future ahead.<br/>Hope you like our content.</h3>
      <a href="/Homepage/courses" className={`${classes.link} ${classes.darkblue}`}>Learn More</a>
    </div>
   </div> 
  );
};

export default Congratulation;
