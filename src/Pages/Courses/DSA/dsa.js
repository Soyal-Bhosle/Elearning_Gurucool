import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import ReactPlayer from 'react-player';
import Navbar from '../../../Components/Navbar/Navbar';

function DSA() {
  const [watchTime, setWatchTime] = useState(0);
  const [certificateUnlocked, setCertificateUnlocked] = useState(false);

  useEffect(() => {
    if (watchTime >= 6 * 3600) {
      setCertificateUnlocked(true);
    }
  }, [watchTime]);

  const handleUnlockCertificate = () => {
    window.location.href = '/Homepage/courses/dsa/pop';
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
        Data Structures and Algorithms Course
      </Typography>
      <Typography variant="body1" gutterBottom>
        Data structures and algorithms are fundamental tools for any computer scientist or software engineer. This course will cover topics such as arrays, linked lists, trees, graphs, sorting and searching algorithms, and more.
      </Typography>
      <ReactPlayer 
        url="https://youtu.be/hCrO_cR7kno" 
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
          {`Watch at least 6 hours of the video to unlock the certificate`}
        </Typography>
      )}
    </Container>
   </div> 
  );
}

export default DSA;
