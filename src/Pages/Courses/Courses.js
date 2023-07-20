import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '1rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});

const Course = () => {
  const classes = useStyles();

  return (
   <div>
    <Navbar /> 
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Python
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Learn one of the most popular programming languages in the world.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               Beginner level.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: 11hrs 52 min
              </Typography>
              <a href="/Homepage/courses/python">Start Now</a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Java
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Learn one of the most widely-used programming languages in the world.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               Beginner level.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: 12 hrs 23 min
              </Typography>
              <a href="/Homepage/courses/java">Start Now</a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Data Structures and Algorithms
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Learn how to implement common data structures and algorithms.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Intermediate level.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: 9 hrs 11 min
              </Typography>
              <a href="/Homepage/courses/dsa">Start Now</a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                C++
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Learn a high-performance, object-oriented programming language used in developing applications and systems.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Beginner friendly.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: 4 hrs 29 min
              </Typography>
              <a href="/Homepage/courses/CPP">Start Now</a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                C Language
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Learn a procedural programming language used for system programming, embedded systems, and low-level programming.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Beginner friendly.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: 15 hrs 13 min 
              </Typography>
              <a href="/Homepage/courses/CLang">Start Now</a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Web Development
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               Learn the skills and technologies necessary for creating web applications and websites.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               Advanced level.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: 21 hrs 48 min
              </Typography>
              <a href="/Homepage/courses/webdev">Start Now</a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Data Science
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               Learn to extract insights and knowledge from data by applying statistical and computational methods.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               Expert level.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: 11 hrs 22 min
              </Typography>
              <a href="/Homepage/courses/datascience">Start Now</a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Android Development
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               Learn to develop applications for the Android operating system using Java or Kotlin.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               Expert level.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: 41 hrs 01 min
              </Typography>
              <a href="/Homepage/courses/androiddev">Start Now</a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                PHP
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               Learn a server-side scripting language used for web development and creating dynamic web pages.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               Novice level.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: 4 hrs
              </Typography>
              <a href="/Homepage/courses/php">Start Now</a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                JavaScript
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               Learn a versatile scripting language used for front-end web development, server-side development, and building applications.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Beginner friendly.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: 3 hrs 44 mins
              </Typography>
              <a href="/Homepage/courses/javascript">Start Now</a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
   </div> 
  );
};

export default Course;