
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

const JavaQuiz = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCertificateUnlocked, setIsCertificateUnlocked] = useState(false);

  const questions = [
    {
        id: 1,
        question: `What is the output of the following code snippet?
        int x = 10;
        if (x > 5 && x < 15) {
            System.out.println("x is between 5 and 15");
        } else {
            System.out.println("x is not between 5 and 15");
        }`,
        options: [
          ' x is between 5 and 15',
          ' x is not between 5 and 15',
          ' Compilation error',
          ' Runtime error'
        ],
        answer: 'x is between 5 and 15'
    },
    {
        id: 2,
        question: `Which of the following is NOT a valid access modifier in Java?`,
        options: [
          'public',
          'private',
          'protected',
          'final'
        ],
        answer: 'final'
    },  
    {
        id: 3,
        question: `What is the output of the following code snippet?
        String s = "Hello";
        s = s + " World";
        System.out.println(s.length());`,
        options: [
          '5',
          '6',
          '11',
          '12'
        ],
        answer: '12'
    }, 
    {
        id: 4,
        question: `What is the difference between an abstract class and an interface in Java?`,
        options: [
          'An abstract class can have instance variables while an interface cannot',
          'An interface can have default method implementations while an abstract class cannot.',
          'A class can implement multiple interfaces but can only extend one abstract class',
          'An abstract class can be instantiated while an interface cannot.'
        ],
        answer: 'A class can implement multiple interfaces but can only extend one abstract class'
    },
    {
        id: 5,
        question: `What is the output of the following code snippet?
        int[] arr = {1, 2, 3};
        System.out.println(arr[3]);`,
        options: [
          '1',
          '2',
          '3',
          'ArrayIndexOutOfBoundsException'
        ],
        answer: 'ArrayIndexOutOfBoundsException'
    },
    {
        id: 6,
        question: `Which of the following is NOT a valid way to create an object in Java?`,
        options: [
          'MyClass obj = new MyClass();',
          'MyClass obj = MyClass();',
          'MyClass obj;',
          'obj = new MyClass();'
        ],
        answer: 'fMyClass obj = MyClass();'
    },
    {
        id: 7,
        question: `What is the output of the following code snippet?
        for (int i = 0; i < 5; i++) {
          if (i == 2) {
              continue;
          }
          System.out.println(i);
        }`,
        options: [
          '0 1 2 3 4',
          '0 1 3 4',
          '2 4',
          'None of the above'
        ],
        answer: '0 1 3 4'
    },
    {
        id: 8,
        question: `What is the output of the following code snippet?
        String s = "Hello";
        String t = "World";
        String u = s.concat(t);
        System.out.println(u);`,
        options: [
          'HelloWorld',
          'Hello World',
          'HelloWorld!',
          'Compilation error'
        ],
        answer: 'HelloWorld'
    },
    {
        id: 9,
        question: `What is the output of the following code snippet?
        int x = 5;
        switch (x) {
          case 1:
            System.out.println("x is 1");
            break;
          case 5:
            System.out.println("x is 5");
            break;
          default:
            System.out.println("x is not 1 or 5");
        }`,
        options: [
          'x is 1',
          'x is 5',
          'x is not 1 or 5',
          'None of the above'
        ],
        answer: 'x is 5'
    },
    {
        id: 10,
        question: `What is the output of the following code snippet?
        int[] arr = {1, 2, 3};
        for (int i : arr) {
          System.out.println(i);
        }`,
        options: [
          '1 2 3',
          '[1, 2, 3]',
          '[I@hashcode [I@hashcode [I@hashcode',
          'None of the above'
        ],
        answer: '1 2 3'
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
        Java Quiz
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

export default JavaQuiz;