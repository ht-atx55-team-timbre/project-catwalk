import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Divider } from '@material-ui/core';
import axios from 'axios';
import _ from 'underscore';
import Answers from './Answers.jsx';
import HelpfulQuestionHandler from './HelpfulAndReport/HelpfulQuestionHandler';
import AddQuestion from './AddQuestionAndAnswer/AddQuestion.jsx';
import sortingFunctions from './SortingFunctions.js';
import SearchBarComponent from './SearchBarComponent.jsx';
import MoreQuestionsButton from './MoreQuestionsButton.jsx';

const Questions = ({ product_id, name, track }) => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [toggleQuestionReload, setToggleQuestionReload] = useState(true);
  const [toggleAnswerReload, setToggleAnswerReload] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('http://127.0.0.1:3004/qa/questions', {
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

  const handleMoreClick = (e) => {
    track(e, 'Load More Questions');
    setQuestionCount(questionCount + 2);
  }

  const handleCollapseClick = (e) => {
    track(e, 'Collapse Questions');
    setQuestionCount(4);
  }

  const toggleQuestionReloadOnFormSubmit = () => {
    setToggleQuestionReload(!toggleQuestionReload);
  }

  const toggleAnswerReloadOnFormSubmit = () => {
    setToggleAnswerReload(!toggleAnswerReload);
  }

  const sortQuestionsBySearchTerm = (e) => {
    if (count === 0) {
      let eventObj = {
        target: 'Search Bar'
      }
      track(eventObj, 'Search Questions');
      setCount(count + 1);
    }
    if (e.length === 1) {}
    if (e.length > 2) {
      const filteredQuestions = questions.filter(question =>
        question.question_body.toLowerCase().includes(e.toLowerCase())
      );
      setQuestions(filteredQuestions);
    } else if (e.length === 0) {
      setCount(0);
      setQuestions(allQuestions);
    } else {
      setQuestions(allQuestions);
    }
  }

  return (
    <Grid>
      <SearchBarComponent sortQuestionsBySearchTerm={sortQuestionsBySearchTerm} track={track} />
      <Box style={{maxHeight: '75vh', overflow: 'auto'}}>
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
                      track={track}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box>
                    <HelpfulQuestionHandler
                      toggleAnswerReloadOnFormSubmit={toggleAnswerReloadOnFormSubmit}
                      question={question}
                      name={name}
                      track={track}
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
              track={track}
            />
          </Grid>
        </Box>
    </Grid>
  )
}

export default Questions;