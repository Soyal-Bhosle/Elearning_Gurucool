import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import ReactPlayer from 'react-player';
import Navbar from '../../../Components/Navbar/Navbar';

function Python() {
  const [watchTime, setWatchTime] = useState(0);
  // const playerRef = useRef(null);
  const [certificateUnlocked, setCertificateUnlocked] = useState(false);

  useEffect(() => {
    if (watchTime >= 32400) {
      setCertificateUnlocked(true);
    }
  }, [watchTime]);

  const handleUnlockCertificate = () => {
    window.location.href = '/Homepage/courses/python/pop';
  }

  const handleWatchTime = (e) => {
    setWatchTime(e.playedSeconds.toFixed(0));
  }

  return (
   <div >
    <Navbar />
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Python Course
      </Typography>
      <Typography variant="body1" gutterBottom>
        Python is a high-level programming language that is widely used for web development, scientific computing, data analysis, artificial intelligence, and more. It is known for its simplicity, readability, and versatility, making it an excellent choice for beginners and experts alike.
      </Typography>
      <ReactPlayer 
        url="https://youtu.be/gfDE2a7MKjA " 
        playing 
        controls 
        onProgress={handleWatchTime} 
      />
      <Typography variant="body1" gutterBottom>
        {`You have watched ${watchTime} seconds of the video`}
      </Typography>
      {certificateUnlocked ? (
        <Button variant="contained" color="primary" onClick={handleUnlockCertificate} href=''>
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

export default Python;
