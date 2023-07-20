
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

const JavascriptQuiz = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCertificateUnlocked, setIsCertificateUnlocked] = useState(false);

  const questions = [
    {
        id: 1,
        question: `Which of the following is NOT a data type in JavaScript?`,
        options: [
          'String',
          'Integer',
          'Boolean',
          'Undefined'
        ],
        answer: 'Integer'
    },
    {
        id: 2,
        question: `Which of the following is used to declare a variable in JavaScript?`,
        options: [
          'var',
          'let',
          'const',
          'All of the above'
        ],
        answer: 'All of the above'
    },  
    {
        id: 3,
        question: `Which of the following is used to create an array in JavaScript?`,
        options: [
          '[]',
          '()',
          '{}',
          '//'
        ],
        answer: '[]'
    }, 
    {
        id: 4,
        question: `Which of the following is used to access an element in an array in JavaScript?`,
        options: [
          '()',
          '{}',
          '[]',
          '//'
        ],
        answer: '[]'
    },
    {
        id: 5,
        question: `Which of the following is used to loop through an array in JavaScript?`,
        options: [
          'for loop',
          'while loop',
          'do-while loop',
          'All of the above'
        ],
        answer: 'All of the above'
    },
    {
        id: 6,
        question: `Which of the following is used to declare a function in JavaScript?`,
        options: [
          'def',
          'fun',
          'function',
          'All of the above'
        ],
        answer: 'function'
    },
    {
        id: 7,
        question: `Which of the following is used to check if a variable is an array in JavaScript?`,
        options: [
          'isArray()',
          'is_array()',
          'Array.isArray()',
          'None of the above'
        ],
        answer: 'Array.isArray()'
    },
    {
        id: 8,
        question: `Which of the following is used to convert a string to a number in JavaScript?`,
        options: [
          'Number()',
          'parseInt()',
          'parseFloat()',
          'All of the above'
        ],
        answer: 'header()'
    },
    {
        id: 9,
        question: `Which of the following is used to create a new object in JavaScript?`,
        options: [
          '{}',
          '()',
          '[]',
          '//'
        ],
        answer: '{}'
    },
    {
        id: 10,
        question: `Which of the following is used to add an event listener to an element in JavaScript?`,
        options: [
          'addEventListener()',
          'attachEvent()',
          'on()',
          'None of the above'
        ],
        answer: 'addEventListener()'
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
        Java Script Quiz
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

export default JavascriptQuiz;