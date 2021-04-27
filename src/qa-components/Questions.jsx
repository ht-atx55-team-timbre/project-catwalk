import React, { useState, useEffect } from 'react';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import axios from 'axios';
import _ from 'underscore';
import API_KEY from '../config.js';
import Answers from './Answers.jsx';
import HelpfulQuestionHandler from './HelpfulAndReport/HelpfulQuestionHandler';
import AddQuestion from './AddQuestionAndAnswer/AddQuestion.jsx';
import sortingFunctions from './SortingFunctions.js';
import SearchBarComponent from './SearchBarComponent.jsx';

const Questions = ({ product_id, name }) => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(4);
  const [toggleQuestionReload, setToggleQuestionReload] = useState(true);
  const [toggleAnswerReload, setToggleAnswerReload] = useState(true);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions', {
      headers: {
        Authorization: API_KEY
      },
      params: {
        product_id: product_id,
        count: 1000
      }
    })
      .then(questions => {
        const sortedByAnswered = sortingFunctions.sortByAnswered(questions.data.results);
        setAllQuestions(sortedByAnswered)
        setQuestions(sortedByAnswered);
      })
      .catch(err => {
        console.log(err);
      });
  }, [product_id, toggleQuestionReload]);

  useEffect(() => {
    setDisplayedQuestions(questions.slice(0, questionCount))
  }, [questions, questionCount])

  const handleSubmitClick = (event) => {
    setQuestionCount(questionCount + 2);
  }

  const toggleQuestionReloadOnFormSubmit = () => {
    setToggleQuestionReload(!toggleQuestionReload);
  }

  const toggleAnswerReloadOnFormSubmit = () => {
    setToggleAnswerReload(!toggleAnswerReload);
  }

  const sortQuestionsBySearchTerm = (event) => {
    if (event.length > 2) {
      const filteredQuestions = questions.filter(question =>
        question.question_body.toLowerCase().includes(event.toLowerCase())
      );
      setQuestions(filteredQuestions);
    } else {
      setQuestions(allQuestions);
    }
  }

  return (
    <Grid>
      <SearchBarComponent sortQuestionsBySearchTerm={sortQuestionsBySearchTerm} />
      <Box style={{maxHeight: '80vh', overflow: 'auto'}}>
        <Grid>
          {_.map(displayedQuestions, question =>
            <Grid key={question.question_id}>
              <Grid container>
                <Grid item xs={12} sm={9}>
                  <Box pt={2}>
                    <Typography>{<b>Q: {question.question_body}</b>}</Typography>
                  </Box>
                  <Box pt={2}>
                    <Answers
                      toggleAnswerReload={toggleAnswerReload}
                      question_id={question.question_id}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box>
                    <HelpfulQuestionHandler
                      toggleAnswerReloadOnFormSubmit={toggleAnswerReloadOnFormSubmit}
                      question={question}
                      name={name}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
        <Grid container direction="row">
          { questions.length !== displayedQuestions.length &&
            <Box mt={2} mr={2} mb={2}>
              <Button variant="outlined" style={{borderRadius: 0}} onClick={handleSubmitClick}>MORE ANSWERED QUESTIONS</Button>
            </Box>
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