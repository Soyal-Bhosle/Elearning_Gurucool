import React from 'react';
import { Typography, Container, makeStyles, Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';
import Navbar from '../../Components/Navbar/Navbar';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(4),
  },
  socialIcon: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(4),
  },
  contactIcon: {
    marginRight: theme.spacing(1),
  },
}));

function AboutUsPage() {
  const classes = useStyles();

  const openLink = (link) => {
    window.open(link, '_blank');
  };

  return (
   <div>
    <Navbar />
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to Gurucool, your ultimate destination for e-learning! Our platform is designed to provide a comprehensive and engaging learning experience for students of all ages and levels. At Gurucool, we believe that education should be accessible to everyone, regardless of their geographical location, financial background, or any other barriers.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We understand that everyone learns differently, so we offer a variety of courses, from traditional subjects like math and science to cutting-edge topics like coding and artificial intelligence.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our goal is to empower students to reach their full potential and achieve their academic and professional goals. We are dedicated to providing a platform that is easy to use, reliable, and affordable. We are constantly updating and improving our platform to ensure that our users have the best possible learning experience.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Thank you for choosing Gurucool as your e-learning platform. We look forward to embarking on this learning journey with you!
      </Typography>
      <Grid container spacing={3} className={classes.socialIcons}>
        <Grid item>
          <InstagramIcon
            className={classes.socialIcon}
            onClick={() => openLink('https://instagram.com/gurucool_eLearning_official')}
          />
        </Grid>
        <Grid item>
          <TwitterIcon
            className={classes.socialIcon}
            onClick={() => openLink('https://twitter.com/gurucoolelearn')}
          />
        </Grid>
        <Grid item>
          <TelegramIcon
            className={classes.socialIcon}
            onClick={() => openLink('https://t.me/gurucool_eLearning_official')}
          />
        </Grid>
      </Grid>
      <div className={classes.contact}>
        <EmailIcon className={classes.contactIcon} />
        <Typography variant="body1" component="a" href="Gmailto:gurucoolelearning@gmail.com">
        gurucoolelearning@gmail.com
        </Typography>
      </div>
    </Container>
   </div> 
  );
}

export default AboutUsPage;
