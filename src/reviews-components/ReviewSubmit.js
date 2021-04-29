import React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

import getCharacteristics from './getCharacteristics';
import postForm from './review-form/postForm'
import FormRating from './review-form/FormRating'
import FormRecommend from './review-form/FormRecommend'
import FormName from './review-form/FormName'
import FormEmail from './review-form/FormEmail'
import FormCharacteristics from './review-form/FormCharacteristics'
import FormSummary from './review-form/FormSummary'
import FormBody from './review-form/FormBody'
import FormUpload from './review-form/FormUpload'
import FormImages from './review-form/FormImages'
import postDataHelper from './review-form/postDataHelper'

const ReviewSubmit = ({ name, product_id, setAddReview, open, setOpen}) => {

  const [recommend, setRecommend] = useState(true);
  const [rating, setRating] = useState(0);
  const [userName, setUserName] = useState(0);
  const [email, setEmail] = useState('')
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [characteristics, setCharacteristics] = useState({});
  const [files, setFile] = useState([]);

  useEffect(()=> {
    getCharacteristics(product_id)
      .then(characteristics => setCharacteristics(characteristics))
  }, [product_id])

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    setAddReview(true);
    const data = postDataHelper(product_id, rating, summary, body, recommend, userName, email, files, characteristics)
    postForm(data);
  }

  const handleChange = (event) => {
    if (event.target.name in characteristics) {
      characteristics[event.target.name]['value'] = event.target.value
      setCharacteristics({...characteristics})
    }
    if (event.target.name === 'files') {
      setFile([...files, URL.createObjectURL(event.target.files[0])])
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={'lg'}>
      <DialogTitle id="form-dialog-title">Write Your Review</DialogTitle>
      <DialogContent>
        <DialogContentText>
          About the {name}
        </DialogContentText>
        <Grid container>
          <Grid item container xs={5}>
            <FormRating rating={rating} setRating={setRating} />
            <FormRecommend recommend={recommend} setRecommend={setRecommend} />
            <FormCharacteristics characteristics={characteristics} handleChange={handleChange} />
          </Grid>
          <Grid item container xs={7}>
            <FormName setUserName={setUserName} />
            <FormEmail setEmail={setEmail} />
            <FormSummary setSummary={setSummary} />
            <FormBody setBody={setBody} />
          </Grid>
          <FormUpload handleChange={handleChange} />
          <FormImages files={files} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ReviewSubmit;