import React from 'react';
import {
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

const AddQuestion = ({ question, name }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
      <Button onClick={handleClickOpen}>
        <u>Add Answer</u>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Submit Your Answer
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {name}: {question.question_body}
          </DialogContentText>
          <TextField
            required
            inputProps={{maxLength: 1000}}
            autoFocus
            margin="dense"
            id="answer"
            label="Your Answer:"
            type="text"
            fullWidth
            placeholder="Ask your question here"
            multiline
            rows={5}
            maxrows={10}
            variant="outlined"
          />
          <TextField
            required
            inputProps={{maxLength: 60}}
            margin="dense"
            id="name"
            label="What is your nickname:"
            type="text"
            fullWidth
            placeholder="Example: jackson11!"
            variant="outlined"
          />
          <TextField
            required
            inputProps={{maxLength: 60}}
            margin="dense"
            id="email"
            label="Your email:"
            type="text"
            fullWidth
            placeholder="Would you like the product or not?"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          {/* this will be a new component */}
          <Button onClick={handleClose} color="primary">
            Submit Answer
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default AddQuestion;