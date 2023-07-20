
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

const AndroiddevQuiz = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCertificateUnlocked, setIsCertificateUnlocked] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the component that defines the user interface for an Android app?',
      options: ['ContentProvider', 'Activity', 'BroadcastReceiver', 'Service'],
      answer: 'Activity',
    },
    {
      id: 2,
      question: 'Which of the following is used to store data in an Android app?',
      options: ['SQLite database', 'Shared Preferences', 'ContentProvider', 'All of the above'],
      answer: 'All of the above',
    },
    {
        id: 3,
        question: 'Which of the following is NOT a lifecycle method for an Android Activity?',
        options: ['onCreate()', 'onDestroy()', 'onRun()', 'onPause()'],
        answer: 'onRun()',
      },
      {
        id: 4,
        question: 'Which of the following is used to navigate between screens in an Android app?',
        options: ['Activity', 'Intent', 'Fragment', 'Service'],
        answer: 'Intent',
      },
      {
        id: 5,
        question: 'Which of the following is NOT a layout file in Android?',
        options: ['LinearLayout', 'RelativeLayout', 'GridLayout', 'DatabaseLayout'],
        answer: 'DatabaseLayout',
      },
      {
        id: 6,
        question: 'Which of the following is used to perform background tasks in an Android app?',
        options: ['Activity', 'Service', 'BroadcastReceiver', 'ContentProvider'],
        answer: 'Service',
      },
      {
        id: 7,
        question: 'Which of the following is NOT a way to handle threading in an Android app?',
        options: ['AsyncTask', 'Handler', 'Service', 'Thread'],
        answer: 'Service',
      },
      {
        id: 8,
        question: 'Which of the following is used to handle user interactions with a list of items in an Android app?',
        options: ['RecyclerView', 'ListView', 'GridView', 'All of the above'],
        answer: 'All of the above',
      },
      {
        id: 9,
        question: 'Which of the following is NOT a way to persist data across app launches in Android?',
        options: ['SQLite database', 'Shared Preferences', 'ContentProvider', 'LiveData'],
        answer: 'LiveData',
      },
      {
        id: 10,
        question: 'Which of the following is used to handle network requests in an Android app?',
        options: ['Volley', 'Retrofit', 'OkHttp', 'All of the above'],
        answer: 'All of the above',
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
   <div >
    <Navbar />
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Android Development Quiz
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
        <Button className={classes.button} variant="contained" color="primary" href="/Homepage/courses/java/pop/Quiz/Congratulation">
          Next Page
        </Button>
      )}
    </Container>
   </div> 
  );
};

export default AndroiddevQuiz;