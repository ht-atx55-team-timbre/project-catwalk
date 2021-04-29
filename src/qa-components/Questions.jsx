import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Divider } from '@material-ui/core';
import axios from 'axios';
import _ from 'underscore';
import API_KEY from '../config.js';
import Answers from './Answers.jsx';
import HelpfulQuestionHandler from './HelpfulAndReport/HelpfulQuestionHandler';
import AddQuestion from './AddQuestionAndAnswer/AddQuestion.jsx';
import sortingFunctions from './SortingFunctions.js';
import SearchBarComponent from './SearchBarComponent.jsx';
import MoreQuestionsButton from './MoreQuestionsButton.jsx';

const Questions = ({ product_id, name }) => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
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
    setQuestionCount(4);
  }, [product_id])

  useEffect(() => {
    setDisplayedQuestions(questions.slice(0, questionCount))
  }, [questions, questionCount])

  const handleMoreClick = (event) => {
    setQuestionCount(questionCount + 2);
  }

  const handleCollapseClick = (event) => {
    setQuestionCount(4);
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
      <Box style={{maxHeight: '77vh', overflow: 'auto'}}>
        <Grid>
          {_.map(displayedQuestions, question =>
            <Grid key={question.question_id}>
              {question.question_id !== displayedQuestions[0].question_id &&
                <Box pt={1.5}><Divider variant="middle" /></Box>
              }
              <Grid container>
                <Grid item xs={12} sm={9}>
                  <Box pt={2}>
                    <Typography>{<b>Q: {question.question_body}</b>}</Typography>
                  </Box>
                  <Box pt={1.5}>
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
        <Box pb={2}>
          <Grid container direction="row">
            { questions.length && questions.length !== displayedQuestions.length
              ? <MoreQuestionsButton text="More Answered Questions" handleClick={handleMoreClick} />
              : questions.length > 4 &&
              <MoreQuestionsButton text="Collapse Questions" handleClick={handleCollapseClick} />
            }
            <AddQuestion
              toggleQuestionReloadOnFormSubmit={toggleQuestionReloadOnFormSubmit}
              product_id={product_id}
              name={name}
            />
          </Grid>
        </Box>
    </Grid>
  )
}

export default Questions;