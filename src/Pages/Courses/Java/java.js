import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import ReactPlayer from 'react-player';
import Navbar from '../../../Components/Navbar/Navbar';

function Java() {
  const [watchTime, setWatchTime] = useState(0);
  const [certificateUnlocked, setCertificateUnlocked] = useState(false);

  useEffect(() => {
    if (watchTime >= 32400) {
      setCertificateUnlocked(true);
    }
  }, [watchTime]);

  const handleUnlockCertificate = () => {
    window.location.href = '/Homepage/courses/java/pop';
  }

  const handleWatchTime = (e) => {
    setWatchTime(e.playedSeconds.toFixed(0));
  }

  return (
   <div >
    <Navbar /> 
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Java Course
      </Typography>
      <Typography variant="body1" gutterBottom>
        Java is a high-level programming language that is widely used for developing applications, games, and web services. It is known for its simplicity, platform independence, and security, making it a popular choice for businesses and developers alike.
      </Typography>
      <ReactPlayer 
        url="https://youtu.be/BGTx91t8q50" 
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
          {`Watch at least 9 hours of the video to unlock the certificate`}
        </Typography>
      )}
    </Container>
   </div> 
  );
}

export default Java;
