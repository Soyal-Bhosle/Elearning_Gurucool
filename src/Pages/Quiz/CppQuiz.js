
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

const CppQuiz = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCertificateUnlocked, setIsCertificateUnlocked] = useState(false);

  const questions = [
    {
        id: 1,
        question: `Which of the following is NOT a valid C++ data type?`,
        options: [
          'int',
          'float',
          'char*',
          'long long double'
        ],
        answer: 'long long double'
    },
    {
        id: 2,
        question: `What is the output of the following code?
        #include <iostream>
        using namespace std;
        int main() {
        int x = 5;
        cout << x++ << " " << ++x << endl;
        return 0;
    }`,
        options: [
          '5 6',
          '6 6',
          '6 7',
          '5 7'
        ],
        answer: '6 7'
    },  
    {
        id: 3,
        question: `What is the purpose of the keyword "const" in C++?`,
        options: [
          'To declare a variable as a constant',
          'To declare a function as returning a constant value',
          'To declare a function as taking a constant parameter',
          'All of the above'
        ],
        answer: 'All of the above'
    }, 
    {
        id: 4,
        question: `Which of the following is NOT a valid C++ operator?`,
        options: [
          '&&',
          '>',
          '++',
          '@'
        ],
        answer: '@'
    },
    {
        id: 5,
        question: `What is the output of the following code snippet?
        #include <iostream>
        using namespace std;
        int main() {
            int arr[] = {1, 2, 3};
            int* ptr = arr;
            cout << *ptr++ << " " << *ptr++ << endl;
            return 0;
        }`,
        options: [
          '1 2',
          '2 3',
          '1 3',
          '2 2'
        ],
        answer: '1 3'
    },
    {
        id: 6,
        question: `What is the purpose of the "break" statement in C++?`,
        options: [
          'To terminate the current iteration of a loop',
          'To exit a switch statement',
          'To exit a function',
          'All of the above'
        ],
        answer: 'To exit a switch statement'
    },
    {
        id: 7,
        question: `Which of the following is a correct way to dynamically allocate memory in C++?`,
        options: [
          'int* p = new int;',
          'int* p = new int[10];',
          'int* p = new int();',
          'All of the above'
        ],
        answer: 'All of the above'
    },
    {
        id: 8,
        question: `What is the output of the following code?
        #include <iostream>
        using namespace std;
        int main() {
            int a = 5, b = 6;
            int c = (a < b) ? a++ : b++;
            cout << a << " " << b << " " << c << endl;
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
        id: 9,
        question: `Which of the following is a correct way to declare a reference in C++?`,
        options: [
          'int& a = 5;',
          'int& a = &b;',
          'int& a = b;',
          'int* a = &b;'
        ],
        answer: 'int& a = b;'
    },
    {
        id: 10,
        question: `What is the purpose of the "const_cast" operator in C++?`,
        options: [
          'To remove the const qualification of a variable',
          'To add the const qualification to a variable',
          'To convert a variable to a different type',
          'To cast a variable to a different memory address'
        ],
        answer: 'To remove the const qualification of a variable'
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
        C++ Language Quiz
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
        <Button className={classes.button} variant="contained" color="primary" href="/Homepage/courses/CPP/pop/Cppquiz/Congratulation">
          Next Page
        </Button>
      )}
    </Container>
   </div> 
  );
};

export default CppQuiz;