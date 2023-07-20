
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import Navbar from '../../Components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const WebdevQuiz = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCertificateUnlocked, setIsCertificateUnlocked] = useState(false);

  const questions = [
    {
        id: 1,
        question: `What is the difference between server-side rendering and client-side rendering in web development?`,
        options: [
          'Server-side rendering uses a browser to render HTML while client-side rendering uses a server.',
          'Server-side rendering is faster than client-side rendering.',
          'Client-side rendering is done using JavaScript in the browser while server-side rendering is done on the server before sending the HTML to the browser.',
          'Server-side rendering is only used for static websites while client-side rendering is used for dynamic websites.'
        ],
        answer: 'Client-side rendering is done using JavaScript in the browser while server-side rendering is done on the server before sending the HTML to the browser.'
    },
    {
        id: 2,
        question: `Which of the following HTTP status codes indicates that a resource has been permanently removed?`,
        options: [
          '200',
          '404',
          '301',
          '503'
        ],
        answer: '301'
    },  
    {
        id: 3,
        question: `Which of the following is NOT a valid HTTP request method?`,
        options: [
          'GET',
          'POST',
          'SEND',
          'DELETE'
        ],
        answer: 'SEND'
    }, 
    {
        id: 4,
        question: `Which of the following is NOT a valid way to include a CSS file in an HTML document?`,
        options: [
          '<link rel="stylesheet" href="style.css">',
          '<style type="text/css"> @import "style.css"; </style>',
          '<style src="style.css"></style>',
          'All of the above are valid ways to include a CSS file.'
        ],
        answer: '<style src="style.css"></style>'
    },
    {
        id: 5,
        question: `What is the difference between a cookie and a session in web development?`,
        options: [
          'A cookie is stored on the server while a session is stored on the client.',
          'A cookie is only used for login authentication while a session is used for all user data.',
          'A cookie is stored on the client while a session is stored on the server.',
          'There is no difference between a cookie and a session..'
        ],
        answer: 'A cookie is stored on the client while a session is stored on the server.'
    },
    {
        id: 6,
        question: `What is the purpose of the "viewport" meta tag in HTML?`,
        options: [
          'To define the background color of the web page',
          'To specify the size of the HTML document',
          'To optimize the layout of the web page on mobile devices',
          'To set the font size for the entire web page'
        ],
        answer: 'To optimize the layout of the web page on mobile devices'
    },
    {
        id: 7,
        question: `Which of the following is NOT a valid way to create a responsive design in web development?`,
        options: [
          'Using a flexible grid layout',
          'Using media queries to adjust styles based on screen size',
          'Using fixed-width images',
          'All of the above are valid ways to create a responsive design.'
        ],
        answer: 'Using fixed-width images'
    },
    {
        id: 8,
        question: `What is the purpose of a Content Delivery Network (CDN) in web development?`,
        options: [
          'To provide server-side rendering for web pages',
          'To store and serve static assets such as images and CSS files',
          'To provide a database for storing user data',
          'To host web applications'
        ],
        answer: 'To store and serve static assets such as images and CSS files'
    },
    {
        id: 9,
        question: `Which of the following is NOT a valid way to prevent Cross-Site Scripting (XSS) attacks in web development?`,
        options: [
          'Validating input data',
          'Sanitizing output data',
          'Using HTTPS',
          'All of the above are valid ways to prevent XSS attacks.'
        ],
        answer: 'Using HTTPS'
    },
    {
        id: 10,
        question: `Which of the following is a valid way to optimize website performance in web development?`,
        options: [
          'Minifying CSS and JavaScript files',
          'Using a Content Delivery Network (CDN) to serve static assets',
          'Using lazy loading for images',
          'All of the above'
        ],
        answer: 'All of the above'
    },
    
  ];

  const handleAnswerChange = (questionId, answer) => {
    const updatedAnswers = [...answers];
    const existingAnswer = updatedAnswers.find((a) => a.questionId === questionId);

    if (existingAnswer) {
      existingAnswer.answer = answer;
    } else {
      updatedAnswers.push({ questionId, answer });
    }

    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    answers.forEach((a) => {
      const question = questions.find((q) => q.id === a.questionId);
      if (question.answer === a.answer) {
        newScore += 1;
      }
    });
  
    setScore(newScore);
    setIsCertificateUnlocked(newScore >= 5);
  };
  

  return (
   <div>
    <Navbar />
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Web development Quiz
      </Typography>
      {questions.map((q) => (
        <div key={q.id}>
          <Typography variant="h6" gutterBottom>
            {q.id}. {q.question}
          </Typography>
          <Grid container spacing={2}>
            {q.options.map((option) => (
              <Grid item xs={6} key={option}>
                <Button
                  variant="contained"
                  color={answers.find((a) => a.questionId === q.id && a.answer === option) ? 'primary' : 'default'}
                  fullWidth
                  onClick={() => handleAnswerChange(q.id, option)}
                >
                  {option}
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
      <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      {score > 2 && (
        <Typography variant="h6" gutterBottom>
          You got {score} out of {questions.length} questions right!
        </Typography>
      )}
      {isCertificateUnlocked && (
        <Button className={classes.button} variant="contained" color="primary" href="/Homepage/courses/webdev/pop/webdevquiz/Congratulation">
          Next Page
        </Button>
      )}
    </Container>
   </div> 
  );
};

export default WebdevQuiz;