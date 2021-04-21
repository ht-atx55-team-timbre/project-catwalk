import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import API_KEY from '../config.js';
import axios from 'axios';

import QAComponent from './QAComponent.jsx';
import LoadMoreButton from './LoadMoreQs.jsx';
import AddQuestion from './AddQuestion.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsAndAnswers: [],
      helpfulAnswerClicked: false,
      helpfulQuestionClicked: false
    };

    this.handleHelpfulAnswer.bind(this);
  }

  // helpful onclick goes here
  handleHelpfulAnswer = (event) => {
    var changeHelpfulCount = this.state.questionsAndAnswers.slice();
    for (var i = 0; i < this.state.questionsAndAnswers.length; i++) {
      if (this.state.questionsAndAnswers[i].answers[event.target.id] !== undefined) {
        if (this.state.helpfulAnswerClicked) {
          changeHelpfulCount[i].answers[event.target.id].helpfulness--;
          this.setState({helpfulAnswerClicked: false});
        } else {
          changeHelpfulCount[i].answers[event.target.id].helpfulness++;
          this.setState({helpfulAnswerClicked: true});
        }
        this.setState({questionsAndAnswers: changeHelpfulCount});
      }
    }
  }

  handleHelpfulQuestion = (event) => {
    var changeHelpfulCount = this.state.questionsAndAnswers.slice();
    for (var i = 0; i < this.state.questionsAndAnswers.length; i++) {
      if (this.state.questionsAndAnswers[i].question_id === Number(event.target.id)) {
        if (this.state.helpfulQuestionClicked) {
          changeHelpfulCount[i].question_helpfulness--;
          this.setState({helpfulQuestionClicked: false});
        } else {
          changeHelpfulCount[i].question_helpfulness++;
          this.setState({helpfulQuestionClicked: true});
        }
        this.setState({questionsAndAnswers: changeHelpfulCount});
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.product_id !== prevProps.product_id) {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions', {
        headers: {
          Authorization: API_KEY
        },
        params: {
          product_id: this.props.product_id,
          count: 2
        }
      })
        .then((res) => {
          this.setState({questionsAndAnswers: res.data.results})
        })
        .catch((err) => {
          console.log(err, 'error getting questions and answers for the product id');
        });
    }
  }

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <p>QUESTIONS & ANSWERS</p>
        </Grid>
        <SearchBar
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        />
        <Grid item>
          <QAComponent
            questionsAndAnswers={this.state.questionsAndAnswers}
            handleHelpfulAnswer={this.handleHelpfulAnswer}
            handleHelpfulQuestion={this.handleHelpfulQuestion}
          />
        </Grid>
        <Grid item>
          <LoadMoreButton />
          <AddQuestion />
        </Grid>
      </Grid>
    )
  }
}

export default QA;