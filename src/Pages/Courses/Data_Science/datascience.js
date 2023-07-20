import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import ReactPlayer from 'react-player';
import Navbar from '../../../Components/Navbar/Navbar';

function DataScience() {
  const [watchTime, setWatchTime] = useState(0);
  const [certificateUnlocked, setCertificateUnlocked] = useState(false);

  useEffect(() => {
    if (watchTime >= 8 * 3600) {
      setCertificateUnlocked(true);
    }
  }, [watchTime]);

  const handleUnlockCertificate = () => {
    window.location.href = '/Homepage/courses/datascience/pop';
  }

  const handleWatchTime = (e) => {
    const playedSeconds = e.playedSeconds;
    const playedMinutes = playedSeconds / 60;
    const unskippablePlayedMinutes = Math.max(0, playedMinutes - 10);
    const unskippablePlayedSeconds = unskippablePlayedMinutes * 60;
    setWatchTime(unskippablePlayedSeconds.toFixed(0));
  }

  return (
   <div >
    <Navbar /> 
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Data Science Course
      </Typography>
      <Typography variant="body1" gutterBottom>
        This course will cover topics such as statistics, data analysis, machine learning, and more.
      </Typography>
      <ReactPlayer 
        url="https://www.youtube.com/live/xiEC5oFsq2s?feature=share" 
        playing 
        controls 
        onProgress={handleWatchTime} 
      />
      <Typography variant="body1" gutterBottom>
        {`You have watched ${watchTime} seconds of the video`}
      </Typography>
      {certificateUnlocked ? (
        <Button variant="contained" color="primary" onClick={handleUnlockCertificate}>
          Proceed
        </Button>
      ) : (
        <Typography variant="body1" gutterBottom>
          {`Watch at least 8 hours of the video to unlock the certificate`}
        </Typography>
      )}
    </Container>
   </div> 
  );
}

export default DataScience;
