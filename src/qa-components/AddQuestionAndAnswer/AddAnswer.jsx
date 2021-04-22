import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddQuestion = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <u>Add Answer</u>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <h2>Submit Your Answer</h2>
        </DialogTitle>
        <DialogContent>
          <TextField
            inputProps={{maxLength: 1000}}
            autoFocus
            margin="dense"
            id="name"
            label="Your Answer:"
            type="text"
            fullWidth
            placeholder="Ask your question here"
            multiline
            rows={5}
            maxRows={10}
          />
          <TextField
            inputProps={{maxLength: 60}}
            autoFocus
            margin="dense"
            id="name"
            label="What is your nickname:"
            type="text"
            fullWidth
            placeholder="Example: jackson11!"
          />
          <TextField
            inputProps={{maxLength: 60}}
            autoFocus
            margin="dense"
            id="name"
            label="Your email:"
            type="text"
            fullWidth
            placeholder="Would you like the product or not?"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddQuestion;