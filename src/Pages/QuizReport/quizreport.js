import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const Quizreport = () => {
  const classes = useStyles();
  const [quizRecords, setQuizRecords] = useState([]);

  useEffect(() => {
    // Fetch quiz records from local storage or API
    const storedQuizRecords = JSON.parse(localStorage.getItem('quizRecords')) || [];
    setQuizRecords(storedQuizRecords);
  }, []);

  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        Quiz Track Report
      </Typography>
      {quizRecords.length > 0 ? (
        <div>
          {quizRecords.map((quiz, index) => (
            <Paper key={index} className={classes.root} elevation={3}>
              <Typography variant="subtitle1">
                Quiz {index + 1} - {quiz.date}
              </Typography>
              <Typography variant="body1">
                Marks: {quiz.marks}
              </Typography>
            </Paper>
          ))}
        </div>
      ) : (
        <Typography variant="body1" align="center">
          No quiz records found.
        </Typography>
      )}
    </div>
  );
};

export default Quizreport;
