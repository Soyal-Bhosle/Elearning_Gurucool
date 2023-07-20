
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

const DatascienceQuiz = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCertificateUnlocked, setIsCertificateUnlocked] = useState(false);

  const questions = [
    {
        id: 1,
        question: `Which of the following techniques is used for dimensionality reduction in data science?`,
        options: [
          'Logistic Regression',
          'Random Forest',
          'Principal Component Analysis (PCA)',
          'Decision Trees'
        ],
        answer: 'Principal Component Analysis (PCA)'
    },
    {
        id: 2,
        question: `Which of the following techniques is used for anomaly detection in data science?`,
        options: [
          'Linear Regression',
          'K-Means Clustering',
          'Random Forest',
          'Isolation Forest'
        ],
        answer: 'Isolation Forest'
    },  
    {
        id: 3,
        question: `Which of the following is NOT a measure of model performance in data science?`,
        options: [
          'Accuracy',
          'Recall',
          'F1 Score',
          'Precision-Recall Curve'
        ],
        answer: 'Precision-Recall Curve'
    }, 
    {
        id: 4,
        question: `Which of the following is a classification algorithm in data science?`,
        options: [
          'K-Means Clustering',
          'Principal Component Analysis (PCA)',
          'Decision Trees',
          'Gradient Descent'
        ],
        answer: 'Decision Trees'
    },
    {
        id: 5,
        question: `Which of the following is NOT a technique for feature selection in data science?`,
        options: [
          'Principal Component Analysis (PCA)',
          'Recursive Feature Elimination (RFE)',
          'Lasso Regression',
          'Ridge Regression'
        ],
        answer: 'Principal Component Analysis (PCA)'
    },
    {
        id: 6,
        question: `Which of the following is a regularization technique in data science?`,
        options: [
          'K-Means Clustering',
          'Gradient Descent',
          'Random Forest',
          'Lasso Regression'
        ],
        answer: 'Lasso Regression'
    },
    {
        id: 7,
        question: `Which of the following is NOT a clustering algorithm in data science?`,
        options: [
          'K-Means Clustering',
          'Hierarchical Clustering',
          'Random Forest',
          'DBSCAN'
        ],
        answer: 'Random Forest'
    },
    {
        id: 8,
        question: `Which of the following is a technique for handling missing data in data science?`,
        options: [
          'Deleting the rows with missing data',
          'Filling the missing data with the mean of the column',
          'Filling the missing data with the median of the column',
          'All of the above'
        ],
        answer: 'All of the above'
    },
    {
        id: 9,
        question: `Which of the following is NOT a valid way to prevent Cross-Site Scripting (XSS) attacks in web development?`,
        options: [
          'Decision Trees',
          'Random Forest',
          'K-Means Clustering',
          'Support Vector Machines (SVM)'
        ],
        answer: 'K-Means Clustering'
    },
    {
        id: 10,
        question: `Which of the following is a deep learning framework in data science?`,
        options: [
          'Scikit-learn',
          'TensorFlow',
          'Matplotlib',
          'Pandas'
        ],
        answer: 'TensorFlow'
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
        Data Science Quiz
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

export default DatascienceQuiz;