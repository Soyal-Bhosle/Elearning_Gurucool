
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

const CLangQuiz = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCertificateUnlocked, setIsCertificateUnlocked] = useState(false);

  const questions = [
    {
        id: 1,
        question: `What is the output of the following code?
        #include <stdio.h>
        int main() {
            char str1[] = "hello";
            char str2[] = "world";
            printf("%s %s", str1, str2);
            return 0;
        }`,
        options: [
          'helloworld',
          'hello world',
          'world hello',
          'None of the above'
        ],
        answer: 'hello world'
    },
    {
        id: 2,
        question: `Which of the following is NOT a valid way to declare a C function?`,
        options: [
          'int sum(int a, int b) {}',
          'void print() {}',
          'char* getName() {}',
          'int multiply() {}'
        ],
        answer: 'int multiply() {}'
    },  
    {
        id: 3,
        question: `What is the output of the following code?
        #include <stdio.h>
        int main() {
            int arr[] = {1, 2, 3};
            int* ptr = arr;
            printf("%d %d", *ptr++, *ptr++);
            return 0;
        }`,
        options: [
          '1 2',
          '1 3',
          '2 3',
          '2 2'
        ],
        answer: '1 3'
    }, 
    {
        id: 4,
        question: `What is the purpose of the "break" statement in C?`,
        options: [
          'To terminate the current iteration of a loop',
          'To exit a switch statement',
          'To exit a function',
          'All of the above'
        ],
        answer: 'To exit a switch statement'
    },
    {
        id: 5,
        question: `Which of the following is used to loop through an array in JavaScript?`,
        options: [
          'struct person {char* name; int age;};',
          'typedef struct {char* name; int age;} person;',
          'typedef person {char* name; int age;};',
          'struct {char* name; int age;} person;'
        ],
        answer: 'typedef struct {char* name; int age;} person;'
    },
    {
        id: 6,
        question: `What is the output of the following code?
        int main() {
            int a = 5, b = 6;
            int c = (a < b) ? a++ : b++;
            printf("%d %d %d", a, b, c);
            return 0;
        }`,
        options: [
          '6 6 5',
          '5 6 5',
          '5 7 5',
          '6 7 5'
        ],
        answer: '5 6 5'
    },
    {
        id: 7,
        question: `What is the output of the following code?
        #include <stdio.h>
        int main() {
            int x = 10;
            int* p = &x;
            printf("%d %d", *p, ++*p);
            return 0;
        }`,
        options: [
          '10 11',
          '11 11',
          '10 10',
          '11 10'
        ],
        answer: '11 11'
    },
    {
        id: 8,
        question: `Which of the following is a correct way to dynamically allocate memory in C?`,
        options: [
          'int* p = malloc(sizeof(int));',
          'int* p = malloc(sizeof(int)10);',
          'int p = calloc(10, sizeof(int));',
          'All of the above'
        ],
        answer: 'All of the above'
    },
    {
        id: 9,
        question: `What is the output of the following code?
        #include <stdio.h>
        int main() {
            int arr[] = {1, 2, 3};
            printf("%d %d %d", *arr, *(arr+1), *(arr+2));
            return 0;
        }`,
        options: [
          '1 2 3',
          '1 3 2',
          '2 1 3',
          '3 2 1'
        ],
        answer: '1 2 3'
    },
    {
        id: 10,
        question: `Which of the following is NOT a valid C data type?`,
        options: [
          'char',
          'int',
          'string',
          'double'
        ],
        answer: 'string'
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
        C Language Quiz
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
        <Button className={classes.button} variant="contained" color="primary" href="/Homepage/courses/CLang/pop/CLangquiz/Congratulation">
          Next Page
        </Button>
      )}
    </Container>
   </div>
  );
};

export default CLangQuiz;