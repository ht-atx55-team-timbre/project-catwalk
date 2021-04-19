import React from 'react';
import { Grid } from '@material-ui/core';
import _ from 'underscore';
// import { DateTime } from 'luxon';

// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles(() => ({
//   qa: {
//     flex: 1
//   }
// }));

const QAComponent = ({ questionsAndAnswers }) => {
  // const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={9}>
        {_.map(questionsAndAnswers, question =>
          <div key={question.question_id}>
            <div>
              <p>{`Q: ${question.question_body}`}</p>
            </div>
            <div>
              {_.map(question.answers, answer =>
                <div key={answer.id}>
                  <p>{`A: ${answer.body}`}</p>
                  <p>{`by ${answer.answerer_name}, ${answer.date}`}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Grid>
      <Grid item xs={3}>
        <p>Helpful? Yes(25) | Add Answer</p>
      </Grid>
    </Grid>
  )
}

export default QAComponent;