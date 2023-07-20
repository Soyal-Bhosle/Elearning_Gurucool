
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

const PythonQuiz = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCertificateUnlocked, setIsCertificateUnlocked] = useState(false);

  const questions = [
    {
        id: 1,
        question: `What is the output of the following code snippet?
        x = [1, 2, 3]
        y = x
        y.append(4)
        print(x)`,
        options: [
          '[1, 2, 3]',
          '[1, 2, 3, 4]',
          '[2, 3, 4]',
          '[1, 2, 4]'
        ],
        answer: '[1, 2, 3, 4]'
    },
    {
        id: 2,
        question: `Which of the following is NOT a valid way to open a file in Python?`,
        options: [
          'open(file.txt)',
          'open(file.txt, r)',
          'open(file.txt, w)',
          'open(file.txt, a)'
        ],
        answer: 'open(file.txt)'
    },  
    {
        id: 3,
        question: `What is the output of the following code snippet?
        x = 2
        y = 3
        z = x ** y
        print(z)`,
        options: [
          '6',
          '8',
          '9',
          '27'
        ],
        answer: '27'
    }, 
    {
        id: 4,
        question: `What is the difference between a list and a tuple in Python?`,
        options: [
          'A list is mutable while a tuple is immutable.',
          'A list can contain elements of different types while a tuple cannot.',
          'A list has a fixed size while a tuple can grow dynamically.',
          'A list is ordered while a tuple is not.'
        ],
        answer: 'A list is mutable while a tuple is immutable.'
    },
    {
        id: 5,
        question: `What is the output of the following code snippet?
        x = 5
        if x > 10:
          print("x is greater than 10")
        elif x > 3:
          print("x is greater than 3")
        else:
          print("x is less than or equal to 3")`,
        options: [
          'x is greater than 10',
          'x is greater than 3',
          'x is less than or equal to 3',
          'None of the above'
        ],
        answer: 'x is greater than 3'
    },
    {
        id: 6,
        question: `Which of the following is NOT a valid way to create an object in Java?
        x = [1, 2, 3]
        y = x
        x.append(4)
        print(y)`,
        options: [
          '[1, 2, 3]',
          '[1, 2, 3, 4]',
          '[2, 3, 4]',
          '[1, 2, 4]'
        ],
        answer: '[1, 2, 3, 4]'
    },
    {
        id: 7,
        question: `What is the output of the following code snippet?
        x = 5
        y = "5"
        z = x + y
        print(z)`,
        options: [
          '10',
          '55',
          '"55"',
          'TypeError'
        ],
        answer: 'TypeError'
    },
    {
        id: 8,
        question: `Which of the following is a valid way to define a function in Python?`,
        options: [
          'function my_function():',
          'def my_function:',
          'def my_function():',
          'function my_function:'
        ],
        answer: 'def my_function():'
    },
    {
        id: 9,
        question: `What is the output of the following code snippet?
        x = [1, 2, 3]
        y = x
        x = [4, 5, 6]
        print(y)`,
        options: [
          '[1, 2, 3]',
          '[4, 5, 6]',
          '[1, 2, 3, 4, 5, 6]',
          'None of the above'
        ],
        answer: '[1, 2, 3]'
    },
    {
        id: 10,
        question: `What is the output of the following code snippet?
        x = 5
        y = "5"
        z = str(x) + y
        print(z)`,
        options: [
          '10',
          '55',
          '"55"',
          'TypeError'
        ],
        answer: '"55"'
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
        Python Quiz
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
        <Button className={classes.button} variant="contained" color="primary" href="/Homepage/courses/androiddev/pop/javaquiz/Congratulation">
          Next Page
        </Button>
      )}
    </Container>
   </div> 
  );
};

export default PythonQuiz;