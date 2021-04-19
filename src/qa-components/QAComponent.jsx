import React from 'react';
import { Grid } from '@material-ui/core';
import moment from 'moment';
import _ from 'underscore';
// import { DateTime } from 'luxon';

// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles(() => ({
//   qa: {
//     flex: 1
//   }
// }));

const QAComponent = ({ questionsAndAnswers, handleHelpfulAnswer }) => {
  // const classes = useStyles();

  return (
    <Grid>
      {_.map(questionsAndAnswers, question =>
        <Grid container key={question.question_id}>
          <Grid item xs={12} sm={9}>
            <p>{`Q: ${question.question_body}`}</p>
            <div>
              {_.map(question.answers, answer =>
                <div key={answer.id}>
                  <p>{`A: ${answer.body}`}</p>
                  <p>
                    {`by ${answer.answerer_name}, ${moment(answer.date).format('MMMM Do, YYYY')} | Helpful? `}
                    <span>
                      <u id={answer.id} onClick={handleHelpfulAnswer}>Yes</u>
                    </span>
                    {` (${answer.helpfulness}) | Report`}
                  </p>
                </div>
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <p>{`Helpful? Yes (${question.question_helpfulness}) | Add Answer`}</p>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default QAComponent;