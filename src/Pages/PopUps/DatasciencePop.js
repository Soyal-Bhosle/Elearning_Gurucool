import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, Backdrop, Fade } from '@material-ui/core';
import Navbar from '../../Components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
  },
}));

function DatasciencePopup() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
   <div >
    <Navbar />
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3>You have to take the quiz!</h3>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {window.location.href='/Homepage/courses/datascience/pop/datasciencequiz'}}
            >
              Take Quiz
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
   </div> 
  );
}

export default DatasciencePopup;
