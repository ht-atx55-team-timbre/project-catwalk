import _ from 'underscore';

const sortingFunctions = {
  sortByAnswered: (questions) => {
    let result = [];
    let answered = [];
    let unanswered = [];

    for (let i = 0; i < questions.length; i++) {
      if (_.isEmpty(questions[i].answers)) {
        unanswered.push(questions[i]);
      } else {
        answered.push(questions[i]);
      }
    }

    result = answered.concat(unanswered);
    return result;
  }
};

export default sortingFunctions;