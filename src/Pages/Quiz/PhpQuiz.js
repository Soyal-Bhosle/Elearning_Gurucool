
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

const PhpQuiz = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCertificateUnlocked, setIsCertificateUnlocked] = useState(false);

  const questions = [
    {
        id: 1,
        question: `What does PHP stand for?`,
        options: [
          'Personal Home Page',
          'Personal Hypertext Processor',
          'PHP: Hypertext Preprocessor',
          'Personal Hyperlink Processor'
        ],
        answer: 'PHP: Hypertext Preprocessor)'
    },
    {
        id: 2,
        question: `Which of the following is used to start a PHP block of code?`,
        options: [
          '<?php',
          '<?',
          '<?=',
          'Isolation Forest'
        ],
        answer: 'All of the above'
    },  
    {
        id: 3,
        question: `Which of the following is used to connect to a MySQL database in PHP?`,
        options: [
          'mysqli_connect()',
          'mysql_connect()',
          'pdo_connect()',
          'None of the above'
        ],
        answer: 'mysqli_connect()'
    }, 
    {
        id: 4,
        question: `Which of the following is NOT a PHP data type?`,
        options: [
          'string',
          'boolean',
          'char',
          'integer'
        ],
        answer: 'char'
    },
    {
        id: 5,
        question: `Which of the following is used to concatenate two strings in PHP?`,
        options: [
          '.',
          '+',
          ',',
          ';'
        ],
        answer: '.'
    },
    {
        id: 6,
        question: `Which of the following is used to check if a file exists in PHP?`,
        options: [
          'file_exists()',
          'file_check()',
          'file_open()',
          'None of the above'
        ],
        answer: 'file_exists()'
    },
    {
        id: 7,
        question: `Which of the following is used to set a cookie in PHP?`,
        options: [
          'set_cookie()',
          'setcookie()',
          'set_cookie_value()',
          'None of the above'
        ],
        answer: 'setcookie()'
    },
    {
        id: 8,
        question: `Which of the following is used to redirect the user to a different page in PHP?`,
        options: [
          'redirect()',
          'header()',
          'jump()',
          'None of the above'
        ],
        answer: 'header()'
    },
    {
        id: 9,
        question: `Which of the following is used to get the length of a string in PHP?`,
        options: [
          'string_length()',
          'strlen()',
          'length()',
          'None of the above'
        ],
        answer: 'strlen()'
    },
    {
        id: 10,
        question: `Which of the following is used to write data to a file in PHP?`,
        options: [
          'file_put_contents()',
          'file_get_contents()',
          'file_write()b',
          'None of the above'
        ],
        answer: 'file_put_contents()'
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
        Php Quiz
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
        <Button className={classes.button} variant="contained" color="primary" href="/Homepage/courses/datascience/pop/datasciencequiz/Congratulation">
          Next Page
        </Button>
      )}
    </Container>
   </div> 
  );
};

export default PhpQuiz;