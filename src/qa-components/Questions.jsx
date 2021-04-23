import React, { useState, useEffect } from 'react';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import axios from 'axios';
import _ from 'underscore';
import API_KEY from '../config.js';
import Answers from './Answers.jsx';
import HelpfulQuestionHandler from './HelpfulAndReport/HelpfulQuestionHandler';
import AddQuestion from './AddQuestionAndAnswer/AddQuestion.jsx';

const Questions = ({ product_id, name }) => {
  const [questions, setQuestions] = useState([]);
  const [moreQuestions, setMoreQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(4);
  const [toggleQuestionReload, setToggleQuestionReload] = useState(true);
  const [toggleAnswerReload, setToggleAnswerReload] = useState(true);

  // I use two requests here because I do not know the total amount of questions in the database.
  // The second get requests checks to see if there are any more questions left, if there are not
  // any, then I know not to display the get more questions button on lines 76-78
  useEffect(() => {
    if (product_id) {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions', {
        headers: {
          Authorization: API_KEY
        },
        params: {
          product_id: product_id,
          count: questionCount
        }
      })
        .then(questions => {
          setQuestions(questions.data.results);
        })
        .catch(err => {
          console.log(err);
        });
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions', {
        headers: {
          Authorization: API_KEY
        },
        params: {
          product_id: product_id,
          count: questionCount + 2
        }
      })
        .then(questions => {
          setMoreQuestions(questions.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [product_id, questionCount, toggleQuestionReload]);

  const handleSubmitClick = (event) => {
    setQuestionCount(questionCount + 2);
  }

  const toggleQuestionReloadOnFormSubmit = () => {
    setToggleQuestionReload(!toggleQuestionReload);
  }

  const toggleAnswerReloadOnFormSubmit = () => {
    setToggleAnswerReload(!toggleAnswerReload);
  }

  return (
    <Grid>
      <Box style={{maxHeight: '75vh', overflow: 'auto'}}>
        <Grid>
          {_.map(questions, question =>
            <Grid key={question.question_id}>
              <Grid container>
                <Grid item xs={12} sm={9}>
                  <Typography>{`Q: ${question.question_body}`}</Typography>
                  <Answers toggleAnswerReload={toggleAnswerReload} question_id={question.question_id} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <HelpfulQuestionHandler
                    toggleAnswerReloadOnFormSubmit={toggleAnswerReloadOnFormSubmit}
                    question={question}
                    name={name}
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
        <Grid container direction="row">
          { questions.length !== moreQuestions.length &&
            <Button variant="outlined" onClick={handleSubmitClick}>MORE ANSWERED QUESTIONS</Button>
          }
          <AddQuestion
            toggleQuestionReloadOnFormSubmit={toggleQuestionReloadOnFormSubmit}
            product_id={product_id}
            name={name}
          />
        </Grid>
    </Grid>
  )
}

export default Questions;