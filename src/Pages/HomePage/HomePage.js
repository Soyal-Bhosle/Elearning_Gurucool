import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import learnerOutcome1 from './learner-outcome1.jpg';
import learnerOutcome2 from './learner-outcome2.jpg';
import learnerOutcome3 from './learner-outcome3.jpg';
import educationBackground1 from './education-background4.jpg';
import educationBackground2 from './education-background5.jpg';
import educationBackground3 from './education-background6.jpg';
import educationBackground4 from './education-background7.jpg';
import person1 from './person1.jpg';
import person2 from './person2.jpg';
import person3 from './person3.jpg';

import Navbar2 from '../../Components/Navbar/Navbar2';

const IMAGES = [educationBackground1, educationBackground2, educationBackground3, educationBackground4];
const SLIDESHOW_INTERVAL = 5000; // 5 seconds
const LEARNER_OUTCOMES = [
  { image: learnerOutcome1, alt: 'Learner Outcome 1' },
  { image: learnerOutcome2, alt: 'Learner Outcome 2' },
  { image: learnerOutcome3, alt: 'Learner Outcome 3' },
];
const PERSONS = [
  { image: person1, alt: 'Person 1', review: 'The courses at Gurucool helped me acquire new skills and advance in my career.' },
  { image: person2, alt: 'Person 2', review: 'I landed my dream job after completing a course from Gurucool. Highly recommended!' },
  { image: person3, alt: 'Person 3', review: 'Gurucool has a vast collection of courses that are taught by industry experts. It greatly enhanced my knowledge.' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px #000000',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: '$slideshow 10s ease-in-out infinite',
    backgroundImage: `url(${IMAGES[0]})`,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    borderRadius: '10px',
    marginBottom: theme.spacing(4), // Added spacing between containers
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(10px)', // Add blur effect
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    textTransform: 'uppercase', // Uppercase text
    letterSpacing: '2px', // Increased letter spacing
  },
  subtitle: {
    fontSize: '2rem',
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#800000', // Maroon color
    color: '#ffffff', // White color for the text
    marginTop: theme.spacing(6), // Increased spacing for the button
    '&:hover': {
      backgroundColor: '#a52a2a', // Light maroon color on hover
    },
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  buttonIcon: {
    marginLeft: theme.spacing(1),
  },
  outcomesContainer: {
    marginTop: theme.spacing(6), // Increased spacing for the outcomes container
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(173, 216, 230, 0.7)', // Light blue color with alpha transparency
    padding: theme.spacing(4),
    borderRadius: '10px',
    backdropFilter: 'blur(10px)', // Add blur effect
  },
  outcomesText: {
    flex: 1,
    textAlign: 'left',
    marginRight: theme.spacing(4),
  },
  outcomesMessage: {
    marginTop: theme.spacing(2),
    textAlign: 'left',
  },
  outcomeImageContainer: {
    display: 'flex',
    marginTop: theme.spacing(2),
  },
  outcomeImage: {
    height: 'auto',
    width: '300px', // Adjust the width for the standing rectangle size
    borderRadius: '10px',
    marginRight: theme.spacing(2),
    objectFit: 'cover',
    filter: 'brightness(70%)', // Decrease brightness of images
  },
  communityContainer: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6), // Added spacing between containers
    textAlign: 'center',
  },
  communityText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  placedMessage: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2),
  },
  reviewContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4), // Added spacing between containers
  },
  reviewPerson: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  reviewImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: theme.spacing(2),
    objectFit: 'cover',
    filter: 'grayscale(100%)', // Apply grayscale filter to images
  },
  reviewText: {
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  '@keyframes slideshow': {
    '0%': {
      backgroundImage: `url(${IMAGES[0]})`,
    },
    '25%': {
      backgroundImage: `url(${IMAGES[1]})`,
    },
    '50%': {
      backgroundImage: `url(${IMAGES[2]})`,
    },
    '75%': {
      backgroundImage: `url(${IMAGES[3]})`,
    },
    '100%': {
      backgroundImage: `url(${IMAGES[0]})`,
    },
  },
}));

function HomePage() {
  const classes = useStyles();
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, SLIDESHOW_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar2 />
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography variant="h1" className={classes.title}>
            Welcome to My Education Website!
          </Typography>
          <Typography variant="h3" className={classes.subtitle}>
            Find information about courses, programs, and more.
          </Typography>
          <Button className={classes.button} variant="contained" color="primary" href="/login">
            Get Started
            <ArrowForwardIcon className={classes.buttonIcon} />
          </Button>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.outcomesContainer}>
          <div className={classes.outcomesText}>
            <Typography variant="h5">Learner Outcomes from Gurucool</Typography>
            <Typography variant="body1" className={classes.outcomesMessage}>
              87% of people learning from Gurucool report career benefits, including outcomes like getting a promotion,
              becoming better at their current job, and finding a new job.
            </Typography>
            <Button className={classes.button} variant="contained" color="primary" href="/register">
              Join for Free
              <ArrowForwardIcon className={classes.buttonIcon} />
            </Button>
          </div>
          <div className={classes.outcomeImageContainer}>
            {LEARNER_OUTCOMES.map((outcome, index) => (
              <img
                key={index}
                src={outcome.image}
                alt={outcome.alt}
                className={classes.outcomeImage}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.communityContainer}>
          <Typography variant="h4" className={classes.communityText}>
            From the Gurucool community
          </Typography>
          <Typography variant="body1" className={classes.placedMessage}>
            Many people get placed by learning their Favorite skills.
          </Typography>
        </div>
        <div className={classes.reviewContainer}>
          {PERSONS.map((person, index) => (
            <div className={classes.reviewPerson} key={index}>
              <img src={person.image} alt={person.alt} className={classes.reviewImage} />
              <Typography variant="body1" className={classes.reviewText}>
                {person.review}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
