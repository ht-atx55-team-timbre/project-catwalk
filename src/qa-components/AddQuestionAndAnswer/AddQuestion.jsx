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

const AddQuestion = ({ name }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add A Question +
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Ask Your Question
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            About the {name}
          </DialogContentText>
          <TextField
            required
            inputProps={{maxLength: 60}}
            autoFocus
            margin="dense"
            id="question"
            label="Your Question:"
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
            label="Nickname:"
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
            label="Email Address:"
            type="text"
            fullWidth
            placeholder="Would you like the product or not?"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit Question
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default AddQuestion;