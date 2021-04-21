import { useState } from 'react';
import axios from 'axios';
import API_KEY from '../config.js';

const HelpfulQuestionHandler = ({ question }) => {
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [isClicked, setisClicked] = useState(false);

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${question.question_id}/helpful`;
  const headersAndParams = {
    headers: { Authorization: API_KEY },
    params: { question_id: question.question_id }
  };

  const handleHelpfulQuestion = (event) => {
    if (!isClicked) {
      axios.put(url, {helpfulness: helpfulness}, headersAndParams)
        .then((response) => {
          setisClicked(true);
          setHelpfulness(helpfulness + 1);
        })
        .catch((err) => {
          console.log(err, 'error sending new helpful question information');
        });
    }
  }

  return (
    <p>
      {`Helpful? `}
      <span>
        <u id={question.question_id} onClick={handleHelpfulQuestion}>Yes</u>
      </span>
      {` (${helpfulness}) | Add Answer`}
    </p>
  )
}

export default HelpfulQuestionHandler;