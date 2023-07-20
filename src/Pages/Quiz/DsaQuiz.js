
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

const DsaQuiz = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isCertificateUnlocked, setIsCertificateUnlocked] = useState(false);

  const questions = [
    {
        id: 1,
        question: `Which of the following is NOT a valid time complexity for a sorting algorithm?`,
        options: [
          'O(n log n)',
          'O(n^2)',
          'O(n!)',
          'O(log n)'
        ],
        answer: 'O(n!)'
    },
    {
        id: 2,
        question: `What is the time complexity of binary search on a sorted array of size n?`,
        options: [
          'O(1)',
          'O(log n)',
          'O(n)',
          'O(n log n)'
        ],
        answer: 'O(log n)'
    },  
    {
        id: 3,
        question: `What is the time complexity of a typical heapify operation on a binary heap of size n?`,
        options: [
          'O(1)',
          'O(log n)',
          'O(n)',
          'O(n log n)'
        ],
        answer: 'O(log n)'
    }, 
    {
        id: 4,
        question: `Which of the following data structures is NOT a priority queue?`,
        options: [
          'Binary heap',
          'Fibonacci heap',
          'AVL tree',
          'Binomial heap'
        ],
        answer: 'AVL tree'
    },
    {
        id: 5,
        question: `Which of the following is a correct statement about Dijkstra's algorithm?`,
        options: [
          'It is used to find the shortest path in a weighted, directed graph with negative edge weights.',
          'It uses a breadth-first search approach to find the shortest path.',
          'It is guaranteed to find the shortest path in a graph with non-negative edge weights.',
          'It has a worst-case time complexity of O(n^2).'
        ],
        answer: 'It is guaranteed to find the shortest path in a graph with non-negative edge weights.'
    },
    {
        id: 6,
        question: `What is the time complexity of a typical search operation on a hash table with n elements?`,
        options: [
          'O(1)',
          'O(log n)',
          'O(n)',
          'O(n log n)'
        ],
        answer: 'O(1)'
    },
    {
        id: 7,
        question: `Which of the following is NOT a graph traversal algorithm?`,
        options: [
          'Breadth-first search',
          'Depth-first search',
          'Dijkstra s algorithm',
          'Topological sort'
        ],
        answer: 'Dijkstra s algorithm'
    },
    {
        id: 8,
        question: `Which of the following is a correct statement about Kruskal's algorithm?`,
        options: [
          'It is used to find the shortest path in a weighted, directed graph with negative edge weights.',
          'It uses a greedy approach to find the minimum spanning tree of a graph.',
          'It has a worst-case time complexity of O(n^2).',
          'It requires the graph to be connected.'
        ],
        answer: 'It uses a greedy approach to find the minimum spanning tree of a graph.'
    },
    {
        id: 9,
        question: `Which of the following data structures is typically used to implement a graph?`,
        options: [
          'Array',
          'Linked list',
          'Hash table',
          'All of the above'
        ],
        answer: 'All of the above'
    },
    {
        id: 10,
        question: `What is the time complexity of a typical worst-case scenario for quicksort on an array of size n?`,
        options: [
          'O(1)',
          'O(log n)',
          'O(n)',
          'O(n log n)'
        ],
        answer: 'O(n log n)'
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
        Data Structure And Algorithm Quiz
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
        <Button className={classes.button} variant="contained" color="primary" href="/Homepage/courses/dsa/pop/dsaquiz/Congratulation">
          Next Page
        </Button>
      )}
    </Container>
   </div> 
  );
};

export default DsaQuiz;